// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'
    class StringDemo{
    public static void main(String[] args) {
        String str = "This is javascript class";
        String[] strArr = str.split(" ");
        String result = "";
        for(String str1: strArr) {
            String rev = "";
            for(int i = str1.length()-1; i >= 0 ; i--) {
                rev += str1.charAt(i);
            }
            result = rev + " " + result;
        }
        System.out.println(result);
    }
}