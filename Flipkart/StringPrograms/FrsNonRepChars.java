// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

    class StringDemo{
    public static void main(String[] args) {
        String str = "entertainment";
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