const checkIsNameInvalid = (nome) => {
    // Regex que aceita letras acentuadas ou não, espaços hífens e apóstrofos.
    const pattern = /[a-zA-Z\u00C0-\u00FF\s\-']{2,35}/;
    if (nome.length > 35) {
        return "Nome excedeu o limite máximo de caracteres! Deve conter até no máximo 35 letras.";
    }
    if (nome.length < 2) {
        return "Nome deve conter ao menos 2 caracteres.";
    }
    if (!pattern.test(nome) || /[÷×]/.test(nome)) {
        return "Nome contém caracteres inválidos. São aceitas somente letras, espaços, hífens e apóstrofos.";
    }
    if (!/[a-zA-Z\u00C0-\u00FF]/.test(nome)) {
        return "Nome deve conter alguma letra.";
    }
    return false;
};

export default checkIsNameInvalid;