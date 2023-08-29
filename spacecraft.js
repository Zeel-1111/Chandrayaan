class Spacecraft {
    //Constructor for 
    constructor(x, y, z, direction,prev_direction) {
        this.x = x; 
        this.y = y;
        this.z = z;
        this.direction = direction;  //current direction
        this.prev_direction = prev_direction;  // Direction before facing  upwards or downwards 
    }
}
