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

    

}
