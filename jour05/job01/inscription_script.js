const validateField = async (id, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 'email') resolve(value.includes('@') && value.length > 5);
            if (id === 'password') resolve(value.length >= 8);
            if (id === 'cp') resolve(/^\d{5}$/.test(value));
            if (id === 'nom' || id === 'prenom' || id === 'adresse') resolve(value.trim().length > 0);
            resolve(true);
        }, 500);
    });
};

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', async (e) => {
        const isValid = await validateField(e.target.id, e.target.value);
        const errorSpan = document.getElementById(`error-${e.target.id}`);

        if (!isValid) {
            e.target.classList.add('invalid');
            errorSpan.style.display = 'block';
        } else {
            e.target.classList.remove('invalid');
            errorSpan.style.display = 'none';
        }
    });
});

document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulaire envoyé !');
});