using UnityEngine;
using System.Collections;

public class splashscreen : MonoBehaviour {
	public float delayTime = 5;

	[SerializeField]
	public string level;
	
	IEnumerator Start () {
		yield return new WaitForSeconds( delayTime );
		Application.LoadLevel(level);
	}
}