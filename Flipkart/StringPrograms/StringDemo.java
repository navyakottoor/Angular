// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'
    
    class StringDemo{
    public static void main(String[] args) {

        String str = "This is javascript class";
        String[] strArr = str.split(" ");
        String result = "";
        for(String str1: strArr) {
            result = str1 + " " + result;
        }

        System.out.println(result);
    }
}