// Get the HTML document
var htmlDoc = document;

// Get all the nodes in the document
var nodes = htmlDoc.childNodes;

// Loop through all the nodes
for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i];

  // Identify the type of node
  switch (node.nodeType) {
    case 1:
      console.log("Element Node: " + node.nodeName);
      break;
    case 3:
      console.log("Text Node: " + node.nodeValue);
      break;
    case 8:
      console.log("Comment Node: " + node.nodeValue);
      break;
    default:
      console.log("Other Node Type: " + node.nodeType);
      break;
  }

  // Get the relationships between the nodes
  var parentNode = node.parentNode;
  var childNodes = node.childNodes;

  console.log("Parent Node: " + parentNode.nodeName);
  console.log("Child Nodes: ");
  for (var j = 0; j < childNodes.length; j++) {
    console.log("  - " + childNodes[j].nodeName);
  }
}
