class Anagram {
public static void main(String[] args) {
    String s1 = "silent"; String s2 = "listen";

    outer:
    for(int i = 0; i <= s1.length()-1; i++) {
        for(int j = 0; j <= s2.length()-1; j++){
            if(s1.charAt(i) == s2.charAt(j)) {
                break;
            }
            if(j == s2.length()-1 && s1.charAt(i) != s2.charAt(j)) {
                System.out.println("The Strings are not anagram");
                break outer;
            }
        }
    }
}
}