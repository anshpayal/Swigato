export const validationCheck = (email, password, fullName)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isVaildPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidFullname= /^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(fullName);
    if(!isValidFullname) return "Full Name is Invaild"
    if(!isValidEmail)return "Email is Invaild"
    if(!isVaildPassword)return "Password is Invalid"
    return null;
}