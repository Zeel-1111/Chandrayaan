class Spacecraft {
    //Constructor for 
    constructor(x, y, z, direction,prev_direction) {
        this.x = x; 
        this.y = y;
        this.z = z;
        this.direction = direction;  //current direction
        this.prev_direction = prev_direction;  // Direction before facing  upwards or downwards 
    }
    moveForward() {
        // logic to move forward
        switch (this.direction) {
            case 'N':
                this.y++;
                console.log("North",this.y);
                break;
            case 'S':
                this.y--;
                console.log("South",this.y);
                break;
            case 'E':
                this.x++;
                console.log("East",this.x);
                break;
            case 'W':
                this.x--;
                console.log("West",this.x);
                break;
            case 'U':
                this.z++;
                console.log("Up",this.z);
                break;
            case 'D':
                this.z--;
                console.log("Down",this.z);
                break;
        }
    }

    moveBackward() {
        //logic to move backward
        switch (this.direction) {
            case 'N':
                this.y--;
                console.log("North",this.y);
                break;
            case 'S':
                this.y++;
                console.log("South",this.y);
                break;
            case 'E':
                this.x--;
                console.log("East",this.x);
                break;
            case 'W':
                this.x++;
                console.log("West",this.x);
                break;
            case 'U':
                this.z--;
                console.log("Up",this.z);
                break;
            case 'D':
                this.z++;
                console.log("Down",this.z);
                break;
        }
    }
    turnLeft() {
        // the logic to turn left
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'W':
                this.direction = 'S';
                break;
        }
        if(this.direction == 'U' || this.direction == 'D'){
                switch (this.prev_direction) {
                    case 'N':
                        this.direction = 'W';
                        break;
                    case 'S':
                        this.direction = 'E';
                        break;
                    case 'E':
                        this.direction = 'N';
                        break;
                    case 'W':
                        this.direction = 'S';
                        break;
                    }
                }   
            }
    turnRight() {
        // the logic to turn right
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
        if(this.direction == 'U' || this.direction == 'D'){
            switch (this.prev_direction) {
                case 'N':
                    this.direction = 'E';
                    break;
                case 'S':
                    this.direction = 'W';
                    break;
                case 'E':
                    this.direction = 'S';
                    break;
                case 'W':
                    this.direction = 'N';
                    break;
                }
            }   
        }
    turnUp() {
        // the logic to turn up

        if (this.direction === 'N' || this.direction === 'E') {
            this.prev_direction = this.direction;
            this.direction = 'U';
        } 
        else if (this.direction === 'S' || this.direction === 'W') {
            this.prev_direction = this.direction;
            this.direction = 'D';
        }
    }

    turnDown() {
        // the logic to turn down

        if (this.direction === 'N' || this.direction === 'E') {
            this.prev_direction = this.direction;
            this.direction = 'D';
        } 
        else if (this.direction === 'S' || this.direction === 'W') {
            this.prev_direction = this.direction;
            this.direction = 'U';
        }
    }

    executeCommands(commands) {
        // the logic to execute a sequence of commands
        for (const command of commands) {
            switch (command) {
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'r':
                    this.turnRight();
                    break;
                case 'u':
                    this.turnUp();
                    break;
                case 'd':
                    this.turnDown();
                    break;
            }
        }
    };

    getPosition(){
        return { x: this.x, y: this.y, z: this.z };
    }

    getDirection(){
        return this.direction;
    }
}
