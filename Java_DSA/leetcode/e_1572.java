package leetcode;
import java.util.Scanner;

public class e_1572 {
    public static int diagonalSum(int[][] mat) {
        int r = mat.length;

        int sum = 0;
        for (int i = 0; i < r; i++) {
            int priDiag = mat[i][i];
            int secDiag = mat[i][(r - 1) - i];
            sum += priDiag;
            if (i != ((r - 1) - i))
                sum += secDiag;
        }
        return sum;
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

        System.out.println("The Matrix Diagonal Sum is: ");
        int res = diagonalSum(matrix);
        System.out.println(res);
        sc.close();
    }   
}