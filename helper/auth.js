import { compare, hash } from "bcryptjs";

export async function hasingPassword(password) {
    const saltRound = 10;
    const hashedPass = await hash(password, saltRound);
    return hashedPass;
}

export async function comparePass(password, hashPassword) {
    const isValid = await compare(password, hashPassword)
    return isValid
}