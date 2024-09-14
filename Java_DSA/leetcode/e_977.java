package leetcode;

import java.util.Scanner;

public class e_977 {
    
    public static int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        int start = 0, end = n - 1;
        for (int i = n-1; i >= 0; i--) {
            if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
                res[i] = nums[start] * nums[start];
                start++;
            } else {
                res[i] = nums[end] * nums[end];
                end--;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the len fo the array:");
        int n = sc.nextInt();
        System.out.println("Enter the elements for the array:");
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        int[] res = sortedSquares(nums);
        System.out.println("Sorted Squares Array is: ");
        for (int i = 0; i < n; i++) {
            System.out.print(res[i] + " ");
        }
        System.out.println(" ");
        sc.close();
    }
}
