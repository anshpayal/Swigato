export const validationCheck = (email, password, fullName)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isVaildPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isVaildFullName = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(fullName);
    if(!isVaildFullName) return "Full is Invaild"
    if(!isValidEmail)return "Email is Invaild"
    if(!isVaildPassword)return "Password is Invalid"
    return null;
}