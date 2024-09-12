package leetcode;
import java.util.Scanner;

public class e_876 {
    public static int[][] transpose(int[][] matrix) {
        int r = matrix.length;
        int c = matrix[0].length;
        int output[][] = new int[c][r];

        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                output[j][i] = matrix[i][j];
            }
        }

        return output;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of rows");
        int row = sc.nextInt();
        System.out.println("Enter no. of cols");
        int col = sc.nextInt();
        System.out.println("Enter the Matrix Elements");
        int matrix[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        System.out.println("The transpose Matrix is: ");
        int tranMat[][] = transpose(matrix);
        for (int i = 0; i < tranMat.length; i++) {
            for (int j = 0; j < tranMat[0].length; j++) {
                System.out.print(tranMat[i][j] + " ");
            }
            System.out.println("");
        }
        sc.close();
    }
}
