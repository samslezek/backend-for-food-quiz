(this.webpackJsonpfoodquiz=this.webpackJsonpfoodquiz||[]).push([[0],{10:function(e,o,a){e.exports=a(16)},15:function(e,o,a){},16:function(e,o,a){"use strict";a.r(o);var l=a(1),t=a(6),u=a(3),r=a(2),s=a(5),d=a(4),n=a(0),c=a.n(n),f=a(7),k=a.n(f),i=a(8),v=function(e){function o(){var e,a;Object(l.a)(this,o);for(var t=arguments.length,s=new Array(t),d=0;d<t;d++)s[d]=arguments[d];return(a=Object(u.a)(this,(e=Object(r.a)(o)).call.apply(e,[this].concat(s)))).state={choiceA:{food:a.props.foodBank[a.props.start].food,value:a.props.foodBank[a.props.start].value},choiceB:{food:a.props.foodBank[a.props.start+1].food,value:a.props.foodBank[a.props.start+1].value},correctChoice:Math.max(a.props.foodBank[a.props.start].value,a.props.foodBank[a.props.start+1].value),incorrectChoice:Math.min(a.props.foodBank[a.props.start].value,a.props.foodBank[a.props.start+1].value),clicked:0,correct:0},a.deleteQuestion=function(e,o){console.log(a.state.clicked),e==o?a.setState({correct:1,clicked:1}):a.setState({correct:0,clicked:1})},a.render=function(e){var o=(a.props.start+2)/2;return 0==a.state.clicked?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Question ",o),c.a.createElement("p",null,c.a.createElement("em",null,"Pick the more popular food. ")),c.a.createElement("div",{className:"choices"},c.a.createElement("div",{className:"choice"},c.a.createElement("button",{onClick:function(){a.deleteQuestion(a.state.choiceA.value,a.state.correctChoice),a.props.selected(a.state.choiceA.value,a.state.correctChoice)}},a.state.choiceA.food)),c.a.createElement("div",{className:"choice"},c.a.createElement("button",{onClick:function(){a.deleteQuestion(a.state.choiceB.value,a.state.correctChoice),a.props.selected(a.state.choiceB.value,a.state.correctChoice)}},a.state.choiceB.food)))):0==a.state.correct?a.state.choiceB.value==a.state.correctChoice?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Question ",o),c.a.createElement("div",{className:"choices"},c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"selected-incorrect"},a.state.choiceA.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceA.value).toFixed(3),"%")),c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"not-selected"},a.state.choiceB.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceB.value).toFixed(3),"%")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Question ",o),c.a.createElement("div",{className:"choices"},c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"not-selected"},a.state.choiceA.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceA.value).toFixed(3),"%")),c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"selected-incorrect"},a.state.choiceB.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceB.value).toFixed(3),"%")))):a.state.choiceB.value==a.state.correctChoice?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Question ",o),c.a.createElement("div",{className:"choices"},c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"not-selected"},a.state.choiceA.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceA.value).toFixed(3),"%")),c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"selected-correct"},a.state.choiceB.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceB.value).toFixed(3),"%")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Question ",o),c.a.createElement("div",{className:"choices"},c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"selected-correct"},a.state.choiceA.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceA.value).toFixed(3),"%")),c.a.createElement("div",{className:"choice"},c.a.createElement("button",{className:"not-selected"},a.state.choiceB.food),c.a.createElement("div",{className:"order-pct"},(100*a.state.choiceB.value).toFixed(3),"%"))))},a}return Object(d.a)(o,e),o}(n.Component),E=function(e){function o(e){var a;Object(l.a)(this,o),(a=Object(u.a)(this,Object(r.a)(o).call(this,e))).state={highscores:[]},a.render=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"High Scores"),c.a.createElement("table",{id:"highscores"},c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Score")),a.state.highscores.map((function(e){var o=e.name,a=e.score;return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,o),c.a.createElement("td",null,a,"/10")))}))))};return setTimeout((function(){fetch("/react").then((function(e){return e.json()})).then((function(e){return a.setState({highscores:e})}))}),100),a}return Object(d.a)(o,e),o}(n.Component),y=function(e){function o(){var e,a;Object(l.a)(this,o);for(var t=arguments.length,s=new Array(t),d=0;d<t;d++)s[d]=arguments[d];return(a=Object(u.a)(this,(e=Object(r.a)(o)).call.apply(e,[this].concat(s)))).state={score:a.props.currentScore,inputValue:""},a.render=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:a.updateInputValue},c.a.createElement("input",{type:"text",id:"input1"}),c.a.createElement("input",{type:"submit"}),c.a.createElement("button",{class:"play-again",onClick:function(){a.props.resetfunc()}},"Play Again")))},a.updateInputValue=function(e){e.preventDefault(),a.setState({inputValue:e.target[0].value}),fetch("/react",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.target[0].value,score:a.state.score})}),a.props.submitscore()},a}return Object(d.a)(o,e),Object(t.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({score:this.props.currentScore})}}]),o}(n.Component),m=(a(15),function(e){function o(e){var a;Object(l.a)(this,o);for(var t=i,d=t.length-1;d>0;d--){var n=Math.floor(Math.random()*(d+1)),f=[t[n],t[d]];t[d]=f[0],t[n]=f[1]}return(a=Object(u.a)(this,Object(r.a)(o).call(this,e))).saySomething=function(e,o){e==o?a.setState({correctAnswers:a.state.correctAnswers+1,totalAnswers:a.state.totalAnswers+1}):a.setState({totalAnswers:a.state.totalAnswers+1}),9==a.state.totalAnswers?(console.log("it is 10"),document.getElementById("go-next").setAttribute("style","display:block;margin-top:20px;background-color:blue")):console.log(a.state.totalAnswers),console.log("finished updating parent state to "+a.state.totalAnswers)},a.createQuiz=function(){for(var e=[],o=0;o<20;o+=2)e.push(c.a.createElement(v,{key:o,start:o,foodBank:a.state.foodBank,selected:function(e,o){return a.saySomething(e,o)}}));return e},a.resetGame=function(){for(var e=i,o=e.length-1;o>0;o--){var l=Math.floor(Math.random()*(o+1)),t=[e[l],e[o]];e[o]=t[0],e[l]=t[1]}a.setState({foodBank:e,correctAnswers:0,totalAnswers:0,submittedScore:!1})},a.state={foodBank:t,correctAnswers:0,totalAnswers:0,submittedScore:!1,goNext:!1},a.createQuiz=a.createQuiz.bind(Object(s.a)(a)),a.render=a.render.bind(Object(s.a)(a)),a}return Object(d.a)(o,e),Object(t.a)(o,[{key:"render",value:function(){var e=this;return this.state.totalAnswers<10||0==this.state.goNext?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"top-link"},c.a.createElement("a",{className:"site-link",href:"http://www.samslezek.com"},"Go Back to Sam's Website")),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Food Trivia"),c.a.createElement("p",null,c.a.createElement("em",null,"Pick the more popular food, as defined by % of Instacart orders containing that food. ")),this.createQuiz(),c.a.createElement("button",{id:"go-next",onClick:function(){return e.setState({goNext:!0})}},"Finish"))):0==this.state.submittedScore?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"top-link"},c.a.createElement("a",{className:"site-link",href:"http://www.samslezek.com"},"Go Back to Sam's Website")),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Food Trivia"),c.a.createElement("h3",null,"Results"),c.a.createElement("p",null,"You got ",c.a.createElement("strong",null,this.state.correctAnswers,"/",this.state.totalAnswers)," questions correct. You can submit your name to the High Scores list."),c.a.createElement(y,{currentScore:this.state.correctAnswers,submitscore:function(){return e.setState({submittedScore:!0})},resetfunc:function(){e.resetGame()}}),c.a.createElement(E,null))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"top-link"},c.a.createElement("a",{className:"site-link",href:"http://www.samslezek.com"},"Go Back to Sam's Website")),c.a.createElement("div",{className:"container"},c.a.createElement(E,{key:this.state.submittedScore}),c.a.createElement("button",{className:"play-again-solo",onClick:function(){e.resetGame()}},"Play Again")))}}]),o}(n.Component));k.a.render(c.a.createElement(m,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"key":"1","food":"Bananas","value":"0.20442199999999999"},{"key":"2","food":"Cereal","value":"0.200873"},{"key":"3","food":"Plain Milk","value":"0.193219"},{"key":"4","food":"Chips","value":"0.18701200000000001"},{"key":"5","food":"Candy","value":"0.159549"},{"key":"6","food":"Crackers","value":"0.147147"},{"key":"7","food":"Berries","value":"0.146978"},{"key":"8","food":"Traditional Yogurt","value":"0.13134199999999999"},{"key":"9","food":"Milk Alternatives","value":"0.106265"},{"key":"10","food":"Shredded Cheese","value":"0.105"},{"key":"11","food":"Lettuce","value":"0.10438799999999999"},{"key":"12","food":"Root Vegetables","value":"0.100894"},{"key":"13","food":"Apples","value":"9.3058000000000002E-2"},{"key":"14","food":"Greek Yogurt","value":"9.2966999999999994E-2"},{"key":"15","food":"Frozen Meals","value":"8.8092000000000004E-2"},{"key":"16","food":"Canned Soup","value":"8.6578000000000002E-2"},{"key":"17","food":"Packaged Sliced Cheese","value":"8.6124000000000006E-2"},{"key":"18","food":"Oranges","value":"8.4695000000000006E-2"},{"key":"19","food":"Baked Breads","value":"8.2987000000000005E-2"},{"key":"20","food":"Frozen Pizzas","value":"8.1691E-2"},{"key":"21","food":"Chicken","value":"7.5799000000000005E-2"},{"key":"22","food":"Sandwich Breads","value":"7.0870000000000002E-2"},{"key":"24","food":"Ice Cream","value":"6.9185999999999998E-2"},{"key":"25","food":"Avocados","value":"6.6334000000000004E-2"},{"key":"26","food":"Carrots","value":"6.4560000000000006E-2"},{"key":"27","food":"Boxed Grain Meal & Sides","value":"6.3821000000000003E-2"},{"key":"28","food":"Sugars & Sweeteners","value":"6.2512999999999999E-2"},{"key":"29","food":"String Cheese","value":"6.0992999999999999E-2"},{"key":"30","food":"Popcorn","value":"5.8527999999999997E-2"},{"key":"31","food":"Orange Juice","value":"5.7704999999999999E-2"},{"key":"32","food":"Salad Dressings","value":"5.6203000000000003E-2"},{"key":"33","food":"Hand Soap","value":"5.4640000000000001E-2"},{"key":"34","food":"Tomatoes","value":"5.4156000000000003E-2"},{"key":"35","food":"Deli Turkey","value":"5.1436999999999997E-2"},{"key":"36","food":"Granola Bars","value":"5.1395000000000003E-2"},{"key":"37","food":"Gummy Fruit Snacks","value":"5.0831000000000001E-2"},{"key":"38","food":"Body Soaps","value":"5.0553000000000001E-2"},{"key":"39","food":"Lemons","value":"5.0062000000000002E-2"},{"key":"40","food":"Canned Fruit","value":"4.9335999999999998E-2"},{"key":"41","food":"Peanut Butter","value":"4.8300000000000003E-2"},{"key":"42","food":"Snack Bars","value":"4.7766999999999997E-2"},{"key":"43","food":"Ground Beef","value":"4.7586000000000003E-2"},{"key":"44","food":"Baking Mixes","value":"4.7330999999999998E-2"},{"key":"45","food":"Pretzels","value":"4.7239999999999997E-2"},{"key":"46","food":"Frozen Waffles","value":"4.6149999999999997E-2"},{"key":"47","food":"Canned Beans","value":"4.5369E-2"},{"key":"48","food":"Cooking Oils","value":"4.4472999999999999E-2"},{"key":"49","food":"Tomato Based Sauces","value":"4.3624999999999997E-2"},{"key":"50","food":"Flour Tortillas","value":"4.1942E-2"},{"key":"51","food":"Table Grapes","value":"4.1597000000000002E-2"},{"key":"52","food":"Hot Dogs","value":"4.1227E-2"},{"key":"53","food":"Baby Purees & Pouches","value":"4.0549000000000002E-2"},{"key":"54","food":"Bacon","value":"4.0433999999999998E-2"},{"key":"55","food":"Lactose-Free Milk","value":"3.9423E-2"},{"key":"56","food":"Cucumbers","value":"3.7720999999999998E-2"},{"key":"57","food":"Dried Fruit","value":"3.7539000000000003E-2"},{"key":"58","food":"Bell Peppers","value":"3.7526999999999998E-2"},{"key":"59","food":"Refrigerated Doughs","value":"3.7012000000000003E-2"},{"key":"60","food":"Turkey","value":"3.6908999999999997E-2"},{"key":"61","food":"Canned Tomatoes","value":"3.6394999999999997E-2"},{"key":"62","food":"Cheese Blocks","value":"3.5818999999999997E-2"},{"key":"63","food":"Coffee Creamers","value":"3.5268000000000001E-2"},{"key":"64","food":"Frozen Mixed Vegetables","value":"3.5237999999999998E-2"},{"key":"65","food":"Baking Morsels","value":"3.2809999999999999E-2"},{"key":"66","food":"Deli Ham","value":"3.2792000000000002E-2"},{"key":"67","food":"Yogurt Tubes & Pouches","value":"3.0539E-2"},{"key":"68","food":"Canned Vegetables","value":"3.0217999999999998E-2"},{"key":"69","food":"Bottled Black Tea","value":"2.9496999999999999E-2"},{"key":"70","food":"Dairy-Free Creamers","value":"2.9467E-2"},{"key":"71","food":"Body Lotion & Creams","value":"2.9013000000000001E-2"},{"key":"72","food":"Salad Kits","value":"2.8861000000000001E-2"},{"key":"73","food":"Popsicles","value":"2.7584000000000001E-2"},{"key":"74","food":"Shampoo","value":"2.7432000000000002E-2"},{"key":"75","food":"Salami","value":"2.6942000000000001E-2"},{"key":"76","food":"Almonds","value":"2.6783999999999999E-2"},{"key":"77","food":"Broccoli","value":"2.5687999999999999E-2"},{"key":"78","food":"Frozen Broccoli","value":"2.435E-2"},{"key":"79","food":"Ketchup","value":"2.3998999999999999E-2"},{"key":"80","food":"Conditioner","value":"2.3931999999999998E-2"},{"key":"82","food":"Apple Juice","value":"2.3380999999999999E-2"},{"key":"83","food":"Mushrooms","value":"2.3224000000000002E-2"},{"key":"84","food":"Rolls","value":"2.2423999999999999E-2"},{"key":"85","food":"Celery","value":"2.1776E-2"},{"key":"86","food":"Facial Cleansers","value":"2.1746000000000001E-2"},{"key":"87","food":"Frozen Breakfast Entries","value":"2.0976999999999999E-2"},{"key":"88","food":"Baking Powders","value":"2.0656000000000001E-2"},{"key":"89","food":"Boxed Pasta Meals & Sides","value":"2.0256E-2"},{"key":"90","food":"Frozen Meat Alternatives","value":"1.9928999999999999E-2"},{"key":"91","food":"Yogurt Drinks","value":"1.9498999999999999E-2"},{"key":"92","food":"Canned Seafood","value":"1.9021E-2"},{"key":"93","food":"Body Wipes","value":"1.8349000000000001E-2"},{"key":"94","food":"Trail Mix","value":"1.8190999999999999E-2"},{"key":"95","food":"Cooking Vinegar","value":"1.7864000000000001E-2"},{"key":"96","food":"Pickles","value":"1.7191999999999999E-2"},{"key":"97","food":"Baby Snacks","value":"1.6997999999999999E-2"},{"key":"98","food":"Baking Flours","value":"1.6702000000000002E-2"},{"key":"99","food":"Squash","value":"1.6677000000000001E-2"},{"key":"100","food":"Italian Sausage","value":"1.6629000000000001E-2"},{"key":"101","food":"Fruit Bars","value":"1.6598999999999999E-2"},{"key":"102","food":"Frozen Seafood","value":"1.6471E-2"},{"key":"103","food":"Frozen Poultry","value":"1.6240999999999998E-2"},{"key":"104","food":"Jerky","value":"1.5733E-2"},{"key":"105","food":"Makeup Remover","value":"1.5684E-2"},{"key":"106","food":"Herbal Tea","value":"1.54E-2"},{"key":"107","food":"Instant Noodles","value":"1.5127E-2"},{"key":"108","food":"Cosmetic Cotton Tools","value":"1.4938999999999999E-2"},{"key":"109","food":"Cauliflower","value":"1.4914999999999999E-2"},{"key":"110","food":"Frozen Berries","value":"1.4685E-2"},{"key":"111","food":"Tortellini Pasta","value":"1.46E-2"},{"key":"112","food":"Spaghetti Pasta","value":"1.457E-2"},{"key":"113","food":"Pre-Cut Fresh Vegetables","value":"1.4104E-2"},{"key":"114","food":"Mixed Dry Snacks","value":"1.4067E-2"},{"key":"115","food":"Black Tea","value":"1.3983000000000001E-2"},{"key":"116","food":"Frozen Corn","value":"1.3571E-2"},{"key":"117","food":"Mixed Nuts","value":"1.3377E-2"},{"key":"118","food":"Green Tea","value":"1.3316E-2"},{"key":"119","food":"Peas","value":"1.3200999999999999E-2"},{"key":"120","food":"Hot Sauce","value":"1.3050000000000001E-2"},{"key":"121","food":"Olives","value":"1.2747E-2"},{"key":"122","food":"Cake Decorations","value":"1.2656000000000001E-2"},{"key":"123","food":"Marshmallows","value":"1.2366E-2"},{"key":"124","food":"Frozen Pancakes","value":"1.2269E-2"},{"key":"125","food":"Pudding Snacks","value":"1.2232E-2"},{"key":"126","food":"Peaches","value":"1.2075000000000001E-2"},{"key":"127","food":"Pork Tenderloins","value":"1.2038999999999999E-2"},{"key":"128","food":"Cashews","value":"1.1845E-2"},{"key":"129","food":"Rotini Pasta","value":"1.1778E-2"},{"key":"130","food":"Frozen Peas","value":"1.1535999999999999E-2"},{"key":"131","food":"Quinoa","value":"1.1396999999999999E-2"},{"key":"132","food":"Buns","value":"1.1221E-2"},{"key":"133","food":"Gelato","value":"1.1106E-2"},{"key":"134","food":"Ice Cream Sandwiches","value":"1.1076000000000001E-2"},{"key":"135","food":"Shelf Stable Dips","value":"1.0978999999999999E-2"},{"key":"136","food":"Frozen Pies","value":"1.0718999999999999E-2"},{"key":"137","food":"Canned Chili","value":"1.0706E-2"},{"key":"138","food":"Mustard","value":"1.0652E-2"},{"key":"139","food":"Frozen Beef","value":"1.0628E-2"},{"key":"140","food":"Fresh Herbs","value":"1.0560999999999999E-2"},{"key":"141","food":"Lip Balm & Lip Treatment","value":"1.0064999999999999E-2"},{"key":"142","food":"Peanuts","value":"9.7190000000000002E-3"},{"key":"143","food":"Taco Shells","value":"9.6530000000000001E-3"},{"key":"144","food":"Penne Pasta","value":"9.5379999999999996E-3"},{"key":"145","food":"Enriched Rice","value":"9.4889999999999992E-3"},{"key":"146","food":"Brussels Sprouts","value":"9.3980000000000001E-3"},{"key":"147","food":"Baby Cereals","value":"9.0290000000000006E-3"},{"key":"148","food":"Barbecue Sauces","value":"8.9750000000000003E-3"},{"key":"149","food":"Mayonnaise","value":"8.8529999999999998E-3"},{"key":"150","food":"Chili Peppers","value":"8.8350000000000008E-3"},{"key":"151","food":"Cranberry Juice","value":"8.7500000000000008E-3"},{"key":"152","food":"Corn Tortillas","value":"8.5509999999999996E-3"},{"key":"153","food":"Variety Pack Snacks","value":"8.5450000000000005E-3"},{"key":"154","food":"Soy Sauce","value":"8.4229999999999999E-3"},{"key":"155","food":"Almond Butter","value":"8.0300000000000007E-3"},{"key":"156","food":"Melons","value":"8.0300000000000007E-3"},{"key":"157","food":"Frozen Yogurt","value":"8.0000000000000002E-3"},{"key":"158","food":"Macaroni Pasta","value":"7.9330000000000008E-3"},{"key":"159","food":"Pistachios","value":"7.8910000000000004E-3"},{"key":"160","food":"Chili Sauce","value":"7.7759999999999999E-3"},{"key":"161","food":"Bubble Bath & Additives","value":"7.7330000000000003E-3"},{"key":"162","food":"Peppers","value":"7.6670000000000002E-3"},{"key":"163","food":"Hazelnut Spread","value":"7.6360000000000004E-3"},{"key":"164","food":"Farfalle Pasta","value":"7.3460000000000001E-3"},{"key":"165","food":"Facial Moisturizers","value":"7.2969999999999997E-3"},{"key":"166","food":"Pepperoni","value":"7.0790000000000002E-3"},{"key":"167","food":"Frozen Fruit Mixes","value":"6.7879999999999998E-3"},{"key":"168","food":"Meat Alternatives","value":"6.7400000000000003E-3"},{"key":"169","food":"Hair Spray","value":"6.679E-3"},{"key":"170","food":"Cream Sauces","value":"6.5890000000000002E-3"},{"key":"171","food":"Enchilada Sauces","value":"6.5760000000000002E-3"},{"key":"172","food":"Frozen Spinach","value":"6.4859999999999996E-3"},{"key":"173","food":"Dry Shampoo","value":"6.3340000000000002E-3"},{"key":"174","food":"Frozen Smoothie Mix","value":"6.2979999999999998E-3"},{"key":"175","food":"Gelatin Snacks","value":"6.2919999999999998E-3"},{"key":"176","food":"Deli Chicken","value":"6.2430000000000003E-3"},{"key":"177","food":"Dry Soup Kits","value":"6.038E-3"},{"key":"178","food":"Frozen Breakfast Sandwiches","value":"6.0309999999999999E-3"},{"key":"179","food":"Grapefruits","value":"6.025E-3"},{"key":"180","food":"Mascara","value":"5.9829999999999996E-3"},{"key":"181","food":"Baking Extracts","value":"5.9160000000000003E-3"},{"key":"182","food":"Grain-free Pasta","value":"5.8799999999999998E-3"},{"key":"183","food":"Permanent Hair Color","value":"5.7889999999999999E-3"},{"key":"184","food":"Frozen Breakfast Pastries","value":"5.7829999999999999E-3"},{"key":"185","food":"Wild Rice","value":"5.7530000000000003E-3"},{"key":"186","food":"Frozen Breakfast Burritos","value":"5.7229999999999998E-3"},{"key":"187","food":"Pesto","value":"5.7109999999999999E-3"},{"key":"188","food":"Dandruff Control","value":"5.3839999999999999E-3"},{"key":"189","food":"Naan","value":"5.359E-3"},{"key":"190","food":"Boxed Potato Sides","value":"5.3410000000000003E-3"},{"key":"191","food":"Hand Sanitizer","value":"5.1659999999999996E-3"},{"key":"192","food":"Kiwis","value":"5.117E-3"},{"key":"193","food":"Oatmeal","value":"5.0870000000000004E-3"},{"key":"194","food":"Frozen Green Beans","value":"5.0559999999999997E-3"},{"key":"195","food":"Grape Juice","value":"4.9779999999999998E-3"},{"key":"196","food":"Shell Pasta","value":"4.9170000000000004E-3"},{"key":"197","food":"Egg Noodles","value":"4.9049999999999996E-3"},{"key":"198","food":"Lemon Juice","value":"4.6870000000000002E-3"},{"key":"199","food":"Jasmine Rice","value":"4.6750000000000003E-3"},{"key":"200","food":"Canned Meals","value":"4.6389999999999999E-3"},{"key":"201","food":"Eyeliner","value":"4.627E-3"},{"key":"202","food":"Instant Soup","value":"4.6020000000000002E-3"},{"key":"203","food":"Canned Meat","value":"4.5960000000000003E-3"},{"key":"204","food":"Tanning","value":"4.5180000000000003E-3"},{"key":"205","food":"Nail Polish Removers","value":"4.5110000000000003E-3"},{"key":"206","food":"Fish","value":"4.4929999999999996E-3"},{"key":"207","food":"Deli Beef","value":"4.4749999999999998E-3"},{"key":"208","food":"Pre-Cut Fruits","value":"4.4019999999999997E-3"},{"key":"209","food":"Pizza Sauce","value":"4.1840000000000002E-3"},{"key":"210","food":"Salsas","value":"4.1780000000000003E-3"},{"key":"211","food":"Baby Meals","value":"4.0940000000000004E-3"},{"key":"212","food":"Ice Cream Syrups","value":"4.0749999999999996E-3"},{"key":"213","food":"Nail Polish","value":"3.9849999999999998E-3"},{"key":"214","food":"Pecans","value":"3.96E-3"},{"key":"215","food":"Sunflower Seeds","value":"3.9179999999999996E-3"},{"key":"216","food":"Acne Treatment","value":"3.8760000000000001E-3"},{"key":"217","food":"Body Scrubs","value":"3.8700000000000002E-3"},{"key":"218","food":"Frozen Brussels Sprouts","value":"3.8570000000000002E-3"},{"key":"219","food":"Beans","value":"3.8509999999999998E-3"},{"key":"220","food":"Walnuts","value":"3.7729999999999999E-3"},{"key":"221","food":"Pie Crusts","value":"3.7420000000000001E-3"},{"key":"222","food":"Breakfast Sausage","value":"3.7299999999999998E-3"},{"key":"223","food":"Frozen Cauliflower","value":"3.7299999999999998E-3"},{"key":"224","food":"Gel & Pomade","value":"3.6150000000000002E-3"},{"key":"225","food":"Face & Eye Masks","value":"3.5790000000000001E-3"},{"key":"226","food":"Pomegranates","value":"3.4940000000000001E-3"},{"key":"227","food":"Frozen Juice Concentrates","value":"3.4819999999999999E-3"},{"key":"228","food":"Facial Exfoliants","value":"3.4580000000000001E-3"},{"key":"229","food":"Pizza Crust","value":"3.4399999999999999E-3"},{"key":"230","food":"Pineapple Juice","value":"3.3119999999999998E-3"},{"key":"231","food":"Condensed Milk","value":"3.2699999999999999E-3"},{"key":"232","food":"Evaporated Milk","value":"3.2160000000000001E-3"},{"key":"233","food":"Mixed Deli Meat & Cheeses","value":"3.2100000000000002E-3"},{"key":"234","food":"Nectarines","value":"3.2030000000000001E-3"},{"key":"235","food":"Angel Hair Pasta","value":"3.1250000000000002E-3"},{"key":"236","food":"Frozen Tropical Fruit","value":"3.088E-3"},{"key":"237","food":"Cheese Alternatives","value":"3.0820000000000001E-3"},{"key":"238","food":"Couscous","value":"3.0760000000000002E-3"},{"key":"239","food":"Prepared Pork","value":"3.0219999999999999E-3"},{"key":"240","food":"Baby Pain & Fever Reliever","value":"2.9789999999999999E-3"},{"key":"241","food":"Boxed Stuffing","value":"2.9789999999999999E-3"},{"key":"242","food":"Gravies","value":"2.9789999999999999E-3"},{"key":"243","food":"Eggnog","value":"2.9729999999999999E-3"},{"key":"244","food":"Bratwurst","value":"2.967E-3"},{"key":"245","food":"Frozen Dessert Toppings","value":"2.9250000000000001E-3"},{"key":"246","food":"food Coloring","value":"2.8700000000000002E-3"},{"key":"247","food":"Dairy-Free Yogurt","value":"2.8219999999999999E-3"},{"key":"248","food":"Facial Serums","value":"2.81E-3"},{"key":"249","food":"Chai Tea","value":"2.761E-3"},{"key":"250","food":"Frozen Potatoes","value":"2.725E-3"},{"key":"251","food":"Frozen Rolls","value":"2.6830000000000001E-3"},{"key":"252","food":"Grapefruit Juice","value":"2.6519999999999998E-3"},{"key":"253","food":"Black Beans","value":"2.6280000000000001E-3"},{"key":"254","food":"Fettuccine Pasta","value":"2.6159999999999998E-3"},{"key":"255","food":"Plums","value":"2.5490000000000001E-3"},{"key":"256","food":"Bologna","value":"2.4949999999999998E-3"},{"key":"257","food":"Fruit Snack Cups","value":"2.434E-3"},{"key":"258","food":"Baby Multivitamins","value":"2.4220000000000001E-3"},{"key":"259","food":"Pomegranate Juice","value":"2.4220000000000001E-3"},{"key":"260","food":"Hair Detanglers","value":"2.4099999999999998E-3"},{"key":"261","food":"Spread Combinations","value":"2.2829999999999999E-3"},{"key":"262","food":"Watermelon Juice","value":"2.2769999999999999E-3"},{"key":"263","food":"Eyeshadow","value":"2.2409999999999999E-3"},{"key":"264","food":"Baby Cold Medicine","value":"2.235E-3"},{"key":"265","food":"Steak Sauce","value":"2.186E-3"},{"key":"266","food":"Frozen Carrots","value":"2.1800000000000001E-3"},{"key":"267","food":"Mango Juice","value":"2.1380000000000001E-3"},{"key":"268","food":"Corn","value":"2.0890000000000001E-3"},{"key":"269","food":"Brown Rice","value":"2.0890000000000001E-3"},{"key":"270","food":"Lasagna Pasta","value":"2.0409999999999998E-3"},{"key":"271","food":"Pickled Vegetables","value":"1.9980000000000002E-3"},{"key":"272","food":"Prepared Beef","value":"1.9620000000000002E-3"},{"key":"273","food":"Relish","value":"1.9499999999999999E-3"},{"key":"274","food":"Asparagus","value":"1.877E-3"},{"key":"275","food":"Teriyaki Sauce","value":"1.8109999999999999E-3"},{"key":"276","food":"Frozen Toast","value":"1.786E-3"},{"key":"277","food":"Facial Toner","value":"1.774E-3"},{"key":"278","food":"Prosciutto","value":"1.774E-3"},{"key":"279","food":"Ice Cream Sundae Cones","value":"1.756E-3"},{"key":"280","food":"Bottled Tea Blends","value":"1.702E-3"},{"key":"281","food":"Frozen Toast","value":"1.683E-3"},{"key":"282","food":"Foundation","value":"1.665E-3"},{"key":"283","food":"Sunflower Seed Butter","value":"1.635E-3"},{"key":"284","food":"Shampoo & Conditioner Sets","value":"1.629E-3"},{"key":"285","food":"Kielbasa","value":"1.6230000000000001E-3"},{"key":"286","food":"Stir-Fry Noodles","value":"1.5989999999999999E-3"},{"key":"287","food":"Oil & Serum","value":"1.544E-3"},{"key":"288","food":"Frozen Cakes","value":"1.526E-3"},{"key":"289","food":"Bulk Herbs","value":"1.526E-3"},{"key":"290","food":"Tea Blends","value":"1.4959999999999999E-3"},{"key":"291","food":"Pie Fillings","value":"1.4649999999999999E-3"},{"key":"292","food":"Lime Juice","value":"1.4649999999999999E-3"},{"key":"293","food":"Concealers","value":"1.4109999999999999E-3"},{"key":"294","food":"Rigatoni Pasta","value":"1.3810000000000001E-3"},{"key":"295","food":"Frozen Garlic Bread","value":"1.3749999999999999E-3"},{"key":"296","food":"Cuticle Cream","value":"1.3749999999999999E-3"},{"key":"297","food":"Capers","value":"1.356E-3"},{"key":"298","food":"Baby Probiotics","value":"1.3500000000000001E-3"},{"key":"299","food":"Ice Cream Bars","value":"1.2719999999999999E-3"},{"key":"300","food":"Yeast Infection Treatments","value":"1.2719999999999999E-3"},{"key":"301","food":"Frozen Cherries","value":"1.2719999999999999E-3"},{"key":"302","food":"Linguine Pasta","value":"1.2539999999999999E-3"},{"key":"303","food":"Frozen Peaches","value":"1.2470000000000001E-3"},{"key":"304","food":"Setting Powder","value":"1.2470000000000001E-3"},{"key":"305","food":"Combs & Brushes","value":"1.2470000000000001E-3"},{"key":"306","food":"Frozen Dough","value":"1.2110000000000001E-3"},{"key":"307","food":"Beef Steaks","value":"1.2110000000000001E-3"},{"key":"308","food":"Curry Sauce","value":"1.2049999999999999E-3"},{"key":"309","food":"Denture Cleansers","value":"1.199E-3"},{"key":"310","food":"English Muffins","value":"1.132E-3"},{"key":"311","food":"Mousse","value":"1.108E-3"},{"key":"312","food":"Baby Stomach & Antigas Medicine","value":"1.096E-3"},{"key":"313","food":"False Eyelashes","value":"1.09E-3"},{"key":"314","food":"Buttermilk","value":"1.0660000000000001E-3"},{"key":"315","food":"Peach Juice","value":"1.06E-3"},{"key":"316","food":"Lipstick","value":"1.036E-3"},{"key":"317","food":"Body Wash","value":"1.036E-3"},{"key":"318","food":"Limes","value":"1.011E-3"},{"key":"319","food":"Macadamia Nuts","value":"9.990000000000001E-4"},{"key":"320","food":"Sunscreen","value":"9.9299999999999996E-4"},{"key":"321","food":"Tweezers & Eyebrow Tools","value":"9.5100000000000002E-4"},{"key":"322","food":"Facial Sunscreen","value":"9.3899999999999995E-4"},{"key":"323","food":"Nail Tools","value":"9.2000000000000003E-4"},{"key":"324","food":"Cherries","value":"9.2000000000000003E-4"},{"key":"325","food":"Lip Gloss","value":"8.7799999999999998E-4"},{"key":"326","food":"Tartar Sauce","value":"8.4800000000000001E-4"},{"key":"327","food":"Boxed Asian Meals & Sides","value":"7.9299999999999998E-4"},{"key":"328","food":"Fake Nails","value":"7.8700000000000005E-4"},{"key":"329","food":"Pastes","value":"7.8700000000000005E-4"},{"key":"330","food":"Sweet & Sour Sauce","value":"7.6300000000000001E-4"},{"key":"331","food":"Variety Pack Tea","value":"7.5100000000000004E-4"},{"key":"332","food":"BB & CC Cream","value":"7.3899999999999997E-4"},{"key":"333","food":"Pita Bread","value":"7.3899999999999997E-4"},{"key":"334","food":"Hoisin Sauce","value":"7.3300000000000004E-4"},{"key":"335","food":"Ham","value":"7.3300000000000004E-4"},{"key":"336","food":"Prepared Horseradish","value":"7.1500000000000003E-4"},{"key":"337","food":"Ditalini Pasta","value":"6.78E-4"},{"key":"338","food":"Bronzer","value":"6.6600000000000003E-4"},{"key":"339","food":"Simmer Sauces","value":"6.4199999999999999E-4"},{"key":"340","food":"Frozen Burritos","value":"6.3000000000000003E-4"},{"key":"341","food":"Baby Teething Medicine","value":"5.7499999999999999E-4"},{"key":"342","food":"Cashew Butter","value":"5.3300000000000005E-4"},{"key":"343","food":"Blush","value":"5.1500000000000005E-4"},{"key":"344","food":"Pumpkin Seeds","value":"5.0900000000000001E-4"},{"key":"345","food":"Andouille Sausage","value":"5.0900000000000001E-4"},{"key":"346","food":"Canned Cheese","value":"4.9100000000000001E-4"},{"key":"347","food":"Granola","value":"4.9100000000000001E-4"},{"key":"348","food":"Face Primer","value":"4.84E-4"},{"key":"349","food":"Fish Sauce","value":"4.4799999999999999E-4"},{"key":"350","food":"Shellfish","value":"4.4200000000000001E-4"},{"key":"351","food":"Breakfast Bars","value":"4.3600000000000003E-4"},{"key":"352","food":"Frozen Hash Browns","value":"4.2999999999999999E-4"},{"key":"353","food":"Orzo Pasta","value":"4.2400000000000001E-4"},{"key":"354","food":"Powdered Milk","value":"4.1800000000000002E-4"},{"key":"355","food":"Dry Snack Cakes","value":"4.1800000000000002E-4"},{"key":"356","food":"Pine Nuts","value":"4.06E-4"},{"key":"357","food":"Smoked Fish","value":"4.0000000000000002E-4"},{"key":"358","food":"Mangos","value":"4.0000000000000002E-4"},{"key":"359","food":"Basmati Rice","value":"3.88E-4"},{"key":"360","food":"Flavored Milk","value":"3.88E-4"},{"key":"361","food":"Semi-Permanent Color","value":"3.8200000000000002E-4"},{"key":"362","food":"Body Sprays","value":"3.7500000000000001E-4"},{"key":"363","food":"Leeks","value":"3.7500000000000001E-4"},{"key":"364","food":"Ice Cream Cones","value":"3.6299999999999999E-4"},{"key":"365","food":"Gnocchi Pasta","value":"3.57E-4"},{"key":"366","food":"Hair Dryers","value":"3.4499999999999998E-4"},{"key":"367","food":"Pineapples","value":"3.4499999999999998E-4"},{"key":"368","food":"Hair Regrowth","value":"3.39E-4"},{"key":"369","food":"Baby Vitamins","value":"3.3300000000000002E-4"},{"key":"370","food":"Hair Texturizers","value":"3.2699999999999998E-4"},{"key":"371","food":"Frozen Cheesecakes","value":"3.1500000000000001E-4"},{"key":"372","food":"Makeup Sponges & Applicators","value":"3.0299999999999999E-4"},{"key":"373","food":"Cheese Sauces","value":"2.9700000000000001E-4"},{"key":"374","food":"Prepared Seafood","value":"2.7900000000000001E-4"},{"key":"375","food":"Eggplant","value":"2.7900000000000001E-4"},{"key":"376","food":"Chorizo","value":"2.7300000000000002E-4"},{"key":"377","food":"Bottled Flavored Teas","value":"2.7300000000000002E-4"},{"key":"378","food":"Prune Juice","value":"2.5999999999999998E-4"},{"key":"379","food":"Risotto","value":"2.5999999999999998E-4"},{"key":"380","food":"Broths & Stocks","value":"2.5999999999999998E-4"},{"key":"381","food":"Chia Seeds","value":"2.5399999999999999E-4"},{"key":"382","food":"Flavored Malt Beverages","value":"2.5399999999999999E-4"},{"key":"383","food":"Sorbet","value":"2.3000000000000001E-4"},{"key":"384","food":"Fresh Flowers","value":"2.24E-4"},{"key":"385","food":"Deli Capocollo","value":"2.0000000000000001E-4"},{"key":"386","food":"Bottled Green Tea","value":"1.8200000000000001E-4"},{"key":"387","food":"Ponytail Holders","value":"1.76E-4"},{"key":"388","food":"Hair Relaxers","value":"1.7000000000000001E-4"},{"key":"389","food":"Aloe Vera","value":"1.64E-4"},{"key":"390","food":"Pork Ribs","value":"1.5699999999999999E-4"},{"key":"391","food":"Barley","value":"1.45E-4"},{"key":"392","food":"Lip Liner","value":"1.3300000000000001E-4"},{"key":"393","food":"Sauerkraut","value":"1.3300000000000001E-4"},{"key":"394","food":"Irish Whiskey","value":"1.21E-4"},{"key":"395","food":"Soy Nuts","value":"1.15E-4"},{"key":"396","food":"Wasabi","value":"1.03E-4"},{"key":"397","food":"Urinary Tract Treatments","value":"9.7E-5"},{"key":"398","food":"Frozen Lima Beans","value":"9.1000000000000003E-5"},{"key":"399","food":"Nail Treatments","value":"9.1000000000000003E-5"},{"key":"400","food":"Pinto Beans","value":"8.5000000000000006E-5"},{"key":"401","food":"Sesame Seeds","value":"7.8999999999999996E-5"},{"key":"402","food":"Bulk Tea","value":"7.2999999999999999E-5"},{"key":"403","food":"Bulk Trail Mix","value":"6.7000000000000002E-5"},{"key":"404","food":"Wrapping Dough","value":"6.7000000000000002E-5"},{"key":"405","food":"Coconut Cream","value":"6.0999999999999999E-5"},{"key":"406","food":"Ramen Noodles","value":"6.0999999999999999E-5"},{"key":"407","food":"Hemp Seeds","value":"6.0999999999999999E-5"},{"key":"408","food":"Red Blend","value":"6.0999999999999999E-5"},{"key":"409","food":"Mixed Deli Meat","value":"5.5000000000000002E-5"},{"key":"410","food":"Flavored Malt Beer","value":"5.5000000000000002E-5"},{"key":"411","food":"Frozen Dessert Pastries","value":"5.5000000000000002E-5"},{"key":"412","food":"Sprouts","value":"4.8000000000000001E-5"},{"key":"413","food":"Farro","value":"3.6000000000000001E-5"},{"key":"414","food":"Pears","value":"3.6000000000000001E-5"},{"key":"415","food":"Thinning Hair Treatment","value":"3.6000000000000001E-5"},{"key":"416","food":"Dried Chili Peppers","value":"3.6000000000000001E-5"},{"key":"417","food":"Hair Color Removers","value":"3.0000000000000001E-5"},{"key":"418","food":"Poppy Seeds","value":"3.0000000000000001E-5"},{"key":"419","food":"Tomatillos","value":"3.0000000000000001E-5"},{"key":"420","food":"Oyster Sauce","value":"3.0000000000000001E-5"},{"key":"421","food":"Chestnuts","value":"2.4000000000000001E-5"},{"key":"422","food":"Ground Lamb","value":"2.4000000000000001E-5"},{"key":"423","food":"Bulk Chocolates","value":"2.4000000000000001E-5"},{"key":"424","food":"Mole Sauce","value":"2.4000000000000001E-5"},{"key":"425","food":"Nail Art & Design","value":"1.8E-5"},{"key":"426","food":"Okra","value":"1.8E-5"},{"key":"427","food":"Polenta","value":"1.8E-5"},{"key":"428","food":"Pancake & Waffle Mix","value":"1.8E-5"},{"key":"429","food":"Shaped Pasta","value":"1.2E-5"},{"key":"430","food":"Hair Coloring Tools","value":"1.2E-5"},{"key":"431","food":"Frozen Pork","value":"1.2E-5"},{"key":"432","food":"Peanut Sauces","value":"1.2E-5"},{"key":"434","food":"Rotelle Pasta","value":"1.2E-5"},{"key":"435","food":"Campanelle Pasta","value":"1.2E-5"},{"key":"436","food":"Rhubarb","value":"6.0000000000000002E-6"},{"key":"437","food":"Papayas","value":"6.0000000000000002E-6"},{"key":"438","food":"Hazelnuts","value":"6.0000000000000002E-6"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.65be2ba7.chunk.js.map