//Find if Path Exists in Graph
let  V;
let adj;
function Graph(v)
{
        V = v;
        adj = new Array(v);
        for (let i = 0; i < v; ++i)
            adj[i] = [];
}

function addEdge(v,w)
{
    adj[v].push(w);
}
 
function isReachable(s,d)
{
         let visited = new Array(V);
         for(let i = 0; i < V; i++)
            visited[i] = false;
             
      
        let queue = [];
  
   
        visited[s] = true;
        queue.push(s);
  
        while (queue.length != 0)
        {
          
            n = queue.shift();
              
            if(n == d)
                return true;
            for(let i = 0; i < adj[n].length; i++)
            {
                if (visited[adj[n][i]] == false)
                {
                    queue.push(adj[n][i]);
                    visited[adj[n][i]] = true;
                }
            }
             
        }
  
        return false;
}
 

Graph(3);
addEdge(0, 1);
addEdge(1, 2);
addEdge(2, 0);

 
let u = 0;
let v = 2;
if (isReachable(u, v))
    console.log("There is a path from " + u +" to " + v);
else
    console.log("There is no path from " + u +" to " + v);
 
u = 2;
v = 0;
if (isReachable(u, v))
    console.log("There is a path from " + u +" to " + v);
else
    console.log("There is no path from " + u +" to " + v);