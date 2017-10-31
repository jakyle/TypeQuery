export default class Utility {
    public static getInputValue(elementID: string) {
        const inputElement: any = $(elementID);
        return inputElement.val();
    }
}
