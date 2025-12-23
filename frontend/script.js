document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const hashInput = document.getElementById('certificateHash');
    const form = document.getElementById('certificateForm');
    const statusDiv = document.getElementById('statusMessage');

    // Configure your Node URL here
    const NODE_URL = 'http://localhost:3001';

    // File Input Listener for Hashing
    fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                hashInput.value = hashHex;
                statusDiv.style.display = 'none';
            } catch (error) {
                console.error('Error calculating hash:', error);
                showStatus('Error calculating file hash', 'error');
            }
        }
    });

    // Form Submission Listener
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const issuer = document.getElementById('issuer').value;
        const recipient = document.getElementById('recipient').value;
        const certificateHash = hashInput.value;

        if (!certificateHash) {
            showStatus('Please upload a valid PDF file first.', 'error');
            return;
        }

        const payload = {
            issuer: issuer,
            recipient: recipient,
            certificateHash: certificateHash
        };

        const submitBtn = document.getElementById('submitBtn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Registering...';

        try {
            const response = await fetch(`${NODE_URL}/transaction/broadcast`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                showStatus('Certificate successfully registered! It will be included in the next block.', 'success');
                form.reset();
                hashInput.value = ''; // Clear readonly input manually
            } else {
                showStatus('Failed to register: ' + (data.note || 'Unknown error'), 'error');
            }
        } catch (error) {
            console.error('API Error:', error);
            showStatus('Connection failed. Make sure the local blockchain node is running.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = type;
        statusDiv.style.display = 'block';
    }

    // Mining Button Listener
    const mineBtn = document.getElementById('mineBtn');
    mineBtn.addEventListener('click', async () => {
        const originalText = mineBtn.textContent;
        mineBtn.disabled = true;
        mineBtn.textContent = 'Mining...';

        try {
            const response = await fetch(`${NODE_URL}/mine`, {
                method: 'GET'
            });
            const data = await response.json();

            if (response.ok) {
                showStatus(`Block Mined Successfully! New Block Index: ${data.block.index}`, 'success');
            } else {
                showStatus('Mining failed.', 'error');
            }
        } catch (error) {
            console.error(error);
            showStatus('Mining request failed. Check console.', 'error');
        } finally {
            mineBtn.disabled = false;
            mineBtn.textContent = originalText;
        }
    });
});
