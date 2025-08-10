public class Solution
{
    public int solution(int num1, int num2)
    {
        return num1 + num2;
    }

    public static void Main(string[] args)
    {
        Solution s = new Solution();
        Console.WriteLine(s.solution(2, 3));
        Console.WriteLine(s.solution(100, 2));
    }
}