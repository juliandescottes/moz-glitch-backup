
    // We first create a deep tree with ${deep} nested children
    let deep = 50;
    // Then we create ${n} element after the deep tree
    let n = 50;
    // Number of attributes set on the repeated elements
    let attributes = 50;

    // Build the <div> with $attributes data attributes
    let div = "<div";
    for (var i = 1; i <= attributes; i++) {
      div += ` data-a${i}="${i}"`;
    }
    div += ">";

    // Build the tree of $deep elements
    let tree = "";
    for (i = 1; i <= deep; i++) {
      tree += new Array(i).join(" ");
      tree += div + " " + i + "\n";
    }
    for (i = deep; i >= 1; i--) {
      tree += new Array(i).join(" ");
      tree += "</div>\n";
    }

    // Build the list of $n elements
    let repeat = "";
    for (i = 1; i <= n; i++) {
      repeat += div + " " + i + " </div>\n";
    }

    // Prepare CSS rules to add to the document <style>.
    let CSS_RULES_COUNT = 200;
    let manyCssRules = "";
    for (i = 0; i < CSS_RULES_COUNT; i++) {
      manyCssRules += `
      .many-css-rules {
        font-size: ${i}px;
        margin: 10px;
        padding: 10px;
        font-family: Arial;
        margin: 20px;
      }`;
    }

    let expandManyChildren = new Array(100).join("  <div attr='my-attr'>content</div>\n");

    let maxBalancedDepth = 8;
    function createBalancedMarkup(level = 0) {
      let tab = new Array(level + 1).join("  ");
      if (level < maxBalancedDepth) {
        let child = createBalancedMarkup(level + 1);
        return `${tab}<div>
    ${child}
    ${child}
    ${tab}</div>`;
      } else {
        return tab + "<div class='leaf'>leaf</div>";
      }
    }
    let expandBalanced = createBalancedMarkup();

    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(manyCssRules));
    document.head.appendChild(style);

    var tpl = document.createElement('template');
    tpl.innerHTML =
      `<!-- <div> elements with ${deep} nested childs, all with ${attributes} attributes -->
       <!-- The deepest <div> has id="deep"> -->
       ${tree}
       <!-- ${n} <div> elements without any children -->
       ${repeat}
       <!-- Elements for custom.inspector.manyrules tests -->
       <div class="no-css-rules"></div>
       <div class="many-css-rules"></div>
       <div class="expand-many-children">
       ${expandManyChildren}
       </div>
       <div class="expand-balanced">
       ${expandBalanced}
       </div>`;
    document.body.appendChild(tpl.content);
  