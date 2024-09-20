package Practical_Task_3.Wrong_Ones.Java;

public class APIAccess {
    public static void main(String[] args) {
        String apiKey = "1234567890"; // Insecure, should be handled securely
        String userApiKey = getUserApiKey();

        if (authenticate(apiKey, userApiKey)) {
            System.out.println("Access granted.");
        } else {
            System.out.println("Access denied.");
        }

        // Removed return statement as main should not return a value in Java
        System.out.println("Completed API Access.");
    }

    private static boolean authenticate(String apiKey, String userApiKey) {
        return apiKey.equals(userApiKey);
    }

    private static String getUserApiKey() {
        // Simulated user input, insecure, should be replaced by actual secure input
        return "1234567890"; 
    }
}