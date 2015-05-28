
	var dist:float;
	var dragging :boolean = false;
	 var offset:Vector3;
	 var toDrag :Transform ;
	 
function Start(){


}
	function  Update() {
	
	
		var v3 :Vector3 = Vector3.zero;
		var laspos: Vector3 = Vector3.zero;
		if (Input.touchCount != 1) {
			dragging = false; 
			return;
		}
		var touch  :Touch = Input.touches[0];
		var pos :Vector3 = touch.position;
		
		if (Input.GetMouseButtonDown(0))
		{

			var hit: RaycastHit;
			var ray :Ray  = Camera.main.ScreenPointToRay(pos); 

			if(Physics.Raycast(ray, hit) && (hit.collider.tag == "Draggable"))
			{

				Debug.Log ("Here");
				toDrag = hit.transform;
				dist = hit.transform.position.z - Camera.main.transform.position.z;
				v3 = new Vector3(pos.x, pos.y, dist);
				v3 = Camera.main.ScreenToWorldPoint(v3);
				offset = toDrag.position - v3;
				dragging = true;
			}
		}
		
		
		if (dragging && touch.phase == TouchPhase.Moved) {
			v3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, dist);
			v3 = Camera.main.ScreenToWorldPoint(v3);
			toDrag.position = v3 + offset;
		}
		if (dragging && (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)) {

			
	dragging = false;

		}
	}