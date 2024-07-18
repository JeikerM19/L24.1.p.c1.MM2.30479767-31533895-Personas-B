export default class Cl_procesarP{
    constructor() {
        this.acumEdad = 0;
        this.contP =0;
        this.auxMayor = 0;
        this.auxEdadM = 0;
    }
    procesarPersonas(per){
        this.acumEdad += per.edad;
        this.contP ++;
        if(per.sexo == 2){
            if(per.edad > this.auxMayor){
                this.auxEdadM = per.edad;
                this.auxMayor = per.edad;
            }
        }
    }
    promPer(){
        return this.acumEdad / this.contP;
    }
    mostrarMayorM(){
        return this.auxEdadM;
    }
}