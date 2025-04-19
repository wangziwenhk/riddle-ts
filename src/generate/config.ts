import llvm from "llvm-bindings";

export class Config{
    public static globalContext = new llvm.LLVMContext()
}