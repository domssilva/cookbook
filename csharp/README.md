# C#

C# code reference and snippets

## Unity3d scripting notes

MonoBehaviour is the base class from which every Unity script derives.
When you use C#, you must explicitly derive from MonoBehaviour.  

MonoBehaviour has the following methods:  

```C#
Start()         // runs once the gameplay starts
Update()        // runs for every new frame
FixedUpdate()   // is triggered on physics events
LateUpdate()  
OnGUI()  
OnDisable()  
OnEnable()  
// ... etc
```

[Reference](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html)
