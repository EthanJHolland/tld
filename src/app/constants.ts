import { environment } from "../environments/environment";
import { BasicLetter } from "./models/letter.model";

export class Constants {
    public static VERSION='0.2';

    //urls
    public static URL = environment.production ? 'http://letterdesk.ethanjholland.com' : 'http://localhost:4200';
    public static API_URL = environment.production ?'http://letterdesk.ethanjholland.com:3000' : 'http://localhost:3000';

    public static MIN_LETTER_LEN = 280; //a letter cannot be sent until it is at least this many characters

    //premade letters
    public static ABOUT: BasicLetter = {
        "tldid": "about",
        "location": "Durham, NC",
        "order": [16,87,69,76,67,79,77,69,32,84,79,32,84,72,69,32,16,76,69,84,84,69,82,68,69,83,75,188,32,65,32,80,76,65,67,69,32,84,79,32,80,85,84,32,89,79,85,82,32,80,69,82,83,79,78,65,76,32,84,79,85,67,72,32,79,78,32,89,79,85,82,32,86,73,82,84,85,69,8,65,76,32,78,79,84,69,83,190],
        "times":[0,0.172599,0.2765,0.4428,0.5443,0.6424,0.7281,0.8244,1.3915,1.525499,1.5861,1.6919,1.8163,1.899299,1.9853,2.129899,2.3348,2.477899,2.6111,2.720399,2.8839,3.0706,3.1767,3.415399,3.54,3.7183,3.8388,4.0787,4.2971,4.596799,4.7441,4.9531,5.0249,5.14,5.297599,5.4381,5.5625,5.6414,5.7175,5.8181,5.9836,6.1565,6.2834,6.442399,6.6086,6.6855,6.7673,7.064699,7.3507,7.632,8.167799,8.3765,8.6189,9.2836,9.3839,9.5116,9.6096,9.7581,10.494,10.5766,10.6734,10.833099,10.9065,11.3076,11.524,11.5995,11.795099,11.9069,12.001199,12.1283,12.2717,12.4481,12.6941,12.8165,12.9426,13.11,13.2655,13.9414,14.3647,14.768299,14.9454,15.1563,15.3207,15.3751,15.4549,15.6079,15.7905,15.81].map((e)=>e*.9)
    }

    public static LETTER_NOT_FOUND: BasicLetter = {
        "tldid": "dne",
        "location": "letter not found",
        "order" : [16,84,72,69,32,76,69,84,84,69,82,32,89,79,85,32,82,69,81,85,69,83,84,69,68,32,68,79,69,83,32,78,79,84,32,83,69,69,77,32,84,79,32,69,88,73,83,84,190,190,190],
        "times" : [0,0.214869,0.340755,0.45393,0.582404,0.74614,0.82722,1.046525,1.19491,1.3636,1.46937,1.62094,1.798005,1.869295,1.97985,2.194545,2.31651,2.47906,2.687829,2.859805,2.959255,3.146759,3.326644,3.443795,3.545435,3.6848,3.804404,3.90929,3.999535,4.171435,4.29913,4.450015,4.51771,4.57522,4.685975,4.822474,5.00844,5.16134,5.24219,5.395295,5.488655,5.56005,5.672595,5.82949,6.070269,6.21711,6.313365,6.51999,6.83306,7.053365,7.293115]
    }
}