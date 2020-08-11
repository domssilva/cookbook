using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    private Rigidbody player;

    // Start is called before the first frame update
    void Start()
    {
        // Select GameObject with component = Rigidbody
        player = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    // FixedUpdate has the frequency of the physics system
    private void FixedUpdate()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            Jump();
        }
    }

    public void Jump() 
    {
        ForceMode forceMode = ForceMode.VelocityChange;
        Vector3 movementDirection = Vector3.up;
        player.AddForce(movementDirection * 5, forceMode);
    }
}
