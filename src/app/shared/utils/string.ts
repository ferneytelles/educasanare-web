// eslint-disable-next-line id-blacklist
interface String {
format(...args: any): string;
}

/** Extención prototipal para el que el string realice el format de python, que reemplzaria los string cada que encuentre {} */
String.prototype.format = function(): string {
const args = arguments;
let i = 0;
return this.replace(/{}/g, (): string => typeof args[i] !== 'undefined' ? args[i++] : '');
};
