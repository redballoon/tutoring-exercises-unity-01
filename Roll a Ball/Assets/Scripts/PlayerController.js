#pragma strict

var rb = GetComponent.<Rigidbody>();

var speed:float;

function Start () {
	
}

function Update () {

}

function FixedUpdate() {
	var moveX:float = Input.GetAxis('Horizontal');
	var moveY:float = Input.GetAxis('Vertical');

	var force:Vector3 = new Vector3(moveX, 0, moveY);

	rb.AddForce(force * speed);
}