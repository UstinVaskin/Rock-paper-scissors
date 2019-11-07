



## Rock, Paper, Scissors

![Image anchors'Rock, Paper, Scissors'](https://i.imgur.com/Y07exxI.png)

```
Rock-paper-scissors
├──css
    ├──style.css
├──img
    ├──paper.png
    ├──rock.png
    ├──iscissors.png
├──js
    ├──app.js
└──index.html
```


### Summary 

Create a simple Rock Paper Scissors game using javascript. Play the game against the computer!

### Brief:
* When a user makes their choice (rock, paper or scissors), you should also randomly generate a computer choice
* Write some logic to determine who has won
* Display the player's choice and the computer's choice
* Display the winner on the page
* When the reset button is clicked, clear the choices and the winner from the screen

### Technologies Used:
* Algorithm
* Git;
* GitHub;
* HTML5 with HTML5 ;
* JavaScript (ES6);
* UX 

##### Approach Taken


### Functionality

#### Random Comp Choice: 

```  function getCompChoie() {
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3) // randon numb 
    return choices[randomNum] // choose element p or r or s 
  }
  ```
  
 #### Cases: 
 
 ```
 function game(userChoice) {  // looks at variations Userchoice and  compChoice
    const compChoice = getCompChoie()
    switch (userChoice + compChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win()
        break
      case 'rp':
      case 'ps':
      case 'sr':
        lose()
        break
      case 'pp':
      case 'rr':
      case 'ss':
        tie()
    }
  }

```

### Final Product:

![Image anchors 'Rock, Paper, Scissors'](https://i.imgur.com/h5R2nwE.png)

### Future Enhancement

* It can easily be extended to different versions of the game, such as "Rock Paper Scissors Lizard Spock"


