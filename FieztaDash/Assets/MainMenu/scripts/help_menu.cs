/// <summary>
/// Main menu.
/// Attached to Main Camera
/// </summary>
using UnityEngine;
using System.Collections;

public class help_menu : MonoBehaviour{
	
	public Texture backgroundTexture;
	
	public GUIStyle Random1;
	public GUIStyle Random2;

	
	public float guiPlacementY1;
	public float guiPlacementY2;

	
	public float guiPlacementX1;
	public float guiPlacementX2;

	
	void OnGUI(){
		
		//Display our Background Texture
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),backgroundTexture);
		

		
		// button without gui outline
		if (GUI.Button (new Rect(Screen.width * guiPlacementX1, Screen.height * guiPlacementY1, Screen.width * .13f, Screen.height * .13f), "",Random1)){
			Application.LoadLevel(2);	
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX2, Screen.height * guiPlacementY2, Screen.width * .1f, Screen.height * .1f), "",Random2)){
			Application.LoadLevel(1);
		}

	}
}
