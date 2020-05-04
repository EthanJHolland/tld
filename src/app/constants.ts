//note this file might be git ignored

export class Constants {
    public static VERSION='0.1';

    //dev
    // public static URL='http://localhost:4200';
    // public static API_URL='http://localhost:3000';

    //deploy
    public static URL='http://letterdesk.ethanjholland.com';
    public static API_URL='http://letterdesk.ethanjholland.com:3000';

    public static ABOUT={
        "order":[16,87,69,76,67,79,77,69,32,84,79,32,84,72,69,32,16,76,69,84,84,69,82,68,69,83,75,188,32,65,32,80,76,65,67,69,32,84,79,32,80,85,84,32,89,79,85,82,32,80,69,82,83,79,78,65,76,32,84,79,85,67,72,32,79,78,32,89,79,85,82,32,86,73,82,84,85,69,8,65,76,32,78,79,84,69,83,190],
        "absTimes":[0,0.172599,0.2765,0.4428,0.5443,0.6424,0.7281,0.8244,1.3915,1.525499,1.5861,1.6919,1.8163,1.899299,1.9853,2.129899,2.3348,2.477899,2.6111,2.720399,2.8839,3.0706,3.1767,3.415399,3.54,3.7183,3.8388,4.0787,4.2971,4.596799,4.7441,4.9531,5.0249,5.14,5.297599,5.4381,5.5625,5.6414,5.7175,5.8181,5.9836,6.1565,6.2834,6.442399,6.6086,6.6855,6.7673,7.064699,7.3507,7.632,8.167799,8.3765,8.6189,9.2836,9.3839,9.5116,9.6096,9.7581,10.494,10.5766,10.6734,10.833099,10.9065,11.3076,11.524,11.5995,11.795099,11.9069,12.001199,12.1283,12.2717,12.4481,12.6941,12.8165,12.9426,13.11,13.2655,13.9414,14.3647,14.768299,14.9454,15.1563,15.3207,15.3751,15.4549,15.6079,15.7905,15.81].map((e)=>e*.9),
        //"order" : [16,83,73,78,67,69,32,84,72,69,32,78,79,84,69,32,73,83,32,73,78,32,77,89,32,78,79,84,69,66,79,79,75,188,32,73,84,32,80,82,69,83,85,77,65,66,66,8,76,89,32,72,65,83,32,83,79,77,69,32,77,69,65,78,73,78,71,32,84,79,32,77,69,190,32,16,73,32,83,84,85,68,89,32,73,84,32,70,79,82,32,65,32,76,79,78,71,32,87,72,69,73,76,8,8,8,73,76,69,190],
        //"absTimes" : [0,0.082265,0.159135,0.232569,0.27749,0.365655,0.38208,0.509105,0.535275,0.5996,0.65045,0.72723,0.79514,0.84679,0.91475,0.947315,1.013015,1.079255,1.167655,1.28932,1.36046,1.42292,1.5205,1.693625,1.74269,1.957145,2.0245,2.113195,2.18488,2.25123,2.27543,2.408005,2.48109,2.640085,2.721365,2.79957,2.874575,2.968975,3.609835,3.679565,3.74832,3.77633,3.86989,4.034214,4.18954,4.223965,4.364425,4.75758,5.2492,5.38899,5.50237,5.564805,5.65714,5.70789,5.7766,5.90076,5.929035,5.97265,6.0584,6.12976,6.197309,6.54608,6.61145,6.645945,6.70153,6.77192,6.846309,6.958995,7.08103,7.12214,7.195095,7.277495,7.329375,7.407125,7.502715,7.9243,8.04959,8.18247,8.26986,8.34411,8.41372,8.547535,8.572505,8.71095,8.824915,8.974415,9.012375,9.22282,9.240795,9.35502,9.368855,9.493675,9.533095,9.596125,9.749505,9.77449,9.864605,10.21014,10.332335,10.357245,10.40338,10.41497,10.476915,10.760945,10.92612,11.10169,11.61688,11.692115,11.779345,11.887975],
        "locationString" : "Durham, NC"
    }

    public static LETTER_NOT_FOUND={
        "tldid" : "error", 
        "location" : "letter not found", 
        "order" : [16,84,72,69,32,76,69,84,84,69,82,32,89,79,85,32,82,69,81,85,69,83,84,69,68,32,68,79,69,83,32,78,79,84,32,83,69,69,77,32,84,79,32,69,88,73,83,84,190,190,190],
        "down" : [6197.3550000000005,6412.225,6538.110000000001,6651.285000000001,6779.76,6943.495000000001,7024.575000000001,7243.880000000001,7392.265000000001,7560.955000000001,7666.725,7818.295000000001,7995.360000000001,8066.650000000001,8177.205000000001,8391.900000000001,8513.865000000002,8676.415,8885.185,9057.160000000002,9156.61,9344.115,9524,9641.150000000001,9742.79,9882.155,10001.76,10106.645,10196.890000000001,10368.79,10496.485000000002,10647.37,10715.065,10772.575,10883.330000000002,11019.83,11205.795,11358.695000000002,11439.545,11592.650000000001,11686.010000000002,11757.405,11869.95,12026.845000000001,12267.625,12414.465000000002,12510.720000000001,12717.345000000001,13030.415,13250.720000000001,13490.470000000001],"duration" : [0.258235,0.096489,0.100244,0.079805,0.073025,0.07793,0.089974,0.075394,0.080444,0.127139,0.089439,0.090009,0.069809,0.154345,0.077875,0.090434,0.066734,0.057265,0.113125,0.080769,0.067569,0.073475,0.052885,0.125764,0.089309,0.08659,0.08978,0.088689,0.076014,0.10213,0.069884,0.09825,0.081255,0.064345,0.087764,0.082595,0.060135,0.072024,0.064569,0.081264,0.065064,0.078489,0.08985,0.07061,0.093275,0.088824,0.10225,0.081835,0.089784,0.09726,0.105819],
        "times" : [0,0.214869,0.340755,0.45393,0.582404,0.74614,0.82722,1.046525,1.19491,1.3636,1.46937,1.62094,1.798005,1.869295,1.97985,2.194545,2.31651,2.47906,2.687829,2.859805,2.959255,3.146759,3.326644,3.443795,3.545435,3.6848,3.804404,3.90929,3.999535,4.171435,4.29913,4.450015,4.51771,4.57522,4.685975,4.822474,5.00844,5.16134,5.24219,5.395295,5.488655,5.56005,5.672595,5.82949,6.070269,6.21711,6.313365,6.51999,6.83306,7.053365,7.293115]
    }
}