using UnityEngine;
using System.Collections;

public class CountDown : MonoBehaviour {
	
	
	public UILabel myLabel;
	
	public float myTimer = 20.0f;
	
	void Update () {	
		if(myTimer>0) {
			myTimer -= Time.deltaTime;
			int minutes = Mathf.FloorToInt(myTimer / 60F);
			int seconds = Mathf.FloorToInt(myTimer - minutes * 60);
			
			string niceTime = string.Format("{0:0}:{1:00}", minutes, seconds);
			
			myLabel.text= niceTime;
			//Application.LoadLevel(1);
		}	

		if (myTimer < 0) {



				}
		
	}
}