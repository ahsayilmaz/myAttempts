#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // TODO: Print the winner
    if(score1>score2){
        printf("Player 1 wins!");
    }else if(score1<score2){
        printf("Player 2 wins!");
    }else{
        printf("Tie!");
    }
    printf("\n");
}

int compute_score(string word)
{
    //checked if the character is a letter
    int length = strlen(word);
    int sum = 0;
    for (int index = 0; word[index] != '\0'; index++) {
        //checked if the character is a letter
        if (isalpha(word[index])) {
            //getting the numbers that are equal to the letters on ASCII table and by functions getting their array order to get the scores they are equal to
            for (int i = 0; i<length ; i++){
                if(word[i]>96){
                    int score = word[i] - 97;
                    sum= sum + POINTS[score];
                }else if(word[i]>64){
                    int score = word[i] - 65;
                    sum= sum +POINTS[score];
                }
            }
        }
    }
    return sum;
}
