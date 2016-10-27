(function(){

		//创建舞台
		var stage = new Konva.Stage({
			container: 'container',
			width: window.innerWidth,//全屏
			height: window.innerHeight
		});

		//中心点坐标
		var cenX = stage.width() / 2;
		var cenY = stage.height() / 2;

		//创建背景层
		var bgLayer = new Konva.Layer();
		stage.add(bgLayer);

		//绘制背景
		var innerRadius = 272 / 2;	//内环的半径
		var outerRadius = 240;		// 外环的半径

		// 创建背景内环虚线圆
		var innerCircle = new Konva.Circle({
			x: cenX,
			y: cenY,
			radius: innerRadius,
			stroke: '#ccc',
			strokeWidth: 4,
			dash: [10,4], //设置虚线，10实线， 4像素空 
		});
		//把内环虚线圆添加到背景层中
		bgLayer.add( innerCircle );

		//创建背景的外环的虚线圆
		var outerCircle = new Konva.Circle({
			x: cenX,
			y: cenY,
			radius: outerRadius,
			stroke: '#ccc',
			strokeWidth: 4,
			dash: [10,4], //设置虚线，10实线， 4像素空 
		});
		bgLayer.add( outerCircle ); //把外虚线圆，添加到层中。

		// 把背景中心圆形 添加到 层中
		var cenCircleText = new CircleText({
			x: cenX,			
			y: cenY,
			innerRadius: 132 / 2,
			outerRadius: 90,
			innerStyle: '#525A82',
			outerStyle: '#E1E1E1',
			text: 'H5开发工程师'
		});
		cenCircleText.addToGroupOrLayer( bgLayer );

		bgLayer.draw();

		//计算圆的圆心坐标
		var x0 = cenX + innerRadius*Math.cos( -60 * Math.PI / 180 );
		var y0 = cenY + innerRadius*Math.sin( -60 * Math.PI / 180 );

		// 动画层的绘制
		var animateLayer = new Konva.Layer();
		stage.add( animateLayer );

		//创建2环层的组
		var L2Group = new Konva.Group({
			x: cenX,  //组内的 x，y坐标。
			y: cenY
		});

		//添加2环的圆
		//2环上的 CSS3形状组
		var L2_CircleText_CSS3 = new CircleText({
			x: innerRadius*Math.cos( 160 * Math.PI / 180 ),  //圆的x,y坐标
			y: innerRadius*Math.sin( 160 * Math.PI / 180 ),  
			innerRadius: 30,  					//内圆半径
			outerRadius: 40,  					//外圆的半径
			innerStyle: '#FACED6', 				//内圆填充的颜色呢
			outerStyle: '#E1E1E1',				//外圆环填充的颜色
			text: 'CSS3'
		});
		L2_CircleText_CSS3.addToGroupOrLayer( L2Group );

		//添加2环的圆
		//2环上HTML5的圆形组
		var L2_CircleText_HTML5 = new CircleText({
			x: innerRadius*Math.cos( -60 * Math.PI / 180 ), //文本圆的x坐标
			y: innerRadius*Math.sin( -60 * Math.PI / 180 ), //文本圆的y坐标
			innerRadius: 30, 			// 内圆半径
			outerRadius: 40, 			// 外圆半径
			innerStyle: 'orange', 		//内部填充样式
			outerStyle: '#E1E1E1',		//外圆的样式
			text: 'HTML5' 				// 内圆的文本
		});
		// 把2环上的圆形组添加到 第二环上去。
		L2_CircleText_HTML5.addToGroupOrLayer( L2Group );

		var L2_CircleText_bootstrap = new CircleText({
			x: innerRadius*Math.cos( -290 * Math.PI / 180 ), //文本圆的x坐标
			y: innerRadius*Math.sin( -290 * Math.PI / 180 ), //文本圆的y坐标
			innerRadius: 30, 			// 内圆半径
			outerRadius: 40, 			// 外圆半径
			innerStyle: '#5246B7', 		//内部填充样式
			outerStyle: '#E1E1E1',		//外圆的样式
			text: 'bootstrap' 				// 内圆的文本
		});
		// 把2环上的圆形组添加到 第二环上去。
		L2_CircleText_bootstrap.addToGroupOrLayer( L2Group );
		//把 第二层的组添加到 动画层上去
		animateLayer.add( L2Group );

		//创建一个3环的组
		var L3_group = new Konva.Group({
			x: cenX,
			y: cenY
		});

		//绘制3环圆
		//绘制3环上的 JS圆形组
		var L3_CircleText_JS = new CircleText({
			x: outerRadius*Math.cos( 60 * Math.PI / 180 ),
			y: outerRadius*Math.sin( 60 * Math.PI / 180 ),
			innerRadius: 40,		
			outerRadius: 50,		
			innerStyle: '#91BFF8',	
			outerStyle: '#E1E1E1',	
			text: 'JS'				
		});
		L3_CircleText_JS.addToGroupOrLayer( L3_group );

		var L3_CircleText_Angular = new CircleText({
			x: outerRadius*Math.cos( 120 * Math.PI / 180 ),
			y: outerRadius*Math.sin( 120 * Math.PI / 180 ),
			innerRadius: 40,		//内圆半径
			outerRadius: 50,		//外圆半径
			innerStyle: '#56E8D4',	//内圆的填充样式
			outerStyle: '#E1E1E1',	//外圆的填充样式
			text: 'Angular'				//圆形内的文字
		});
		L3_CircleText_Angular.addToGroupOrLayer( L3_group );

		var L3_CircleText_React = new CircleText({
			x: outerRadius*Math.cos( 180 * Math.PI / 180 ),
			y: outerRadius*Math.sin( 180 * Math.PI / 180 ),
			innerRadius: 40,		//内圆半径
			outerRadius: 50,		//外圆半径
			innerStyle: '#54DE3B',	//内圆的填充样式
			outerStyle: '#E1E1E1',	//外圆的填充样式
			text: 'React'				//圆形内的文字
		});
		L3_CircleText_React.addToGroupOrLayer( L3_group );

		var L3_CircleText_Phonegap = new CircleText({
			x: outerRadius*Math.cos( 240 * Math.PI / 180 ),
			y: outerRadius*Math.sin( 240 * Math.PI / 180 ),
			innerRadius: 40,		//内圆半径
			outerRadius: 50,		//外圆半径
			innerStyle: '#CE1B8E',	//内圆的填充样式
			outerStyle: '#E1E1E1',	//外圆的填充样式
			text: 'Phonegap'				//圆形内的文字
		});
		L3_CircleText_Phonegap.addToGroupOrLayer( L3_group );

		var L3_CircleText_jquery = new CircleText({
			x: outerRadius*Math.cos( 300 * Math.PI / 180 ),
			y: outerRadius*Math.sin( 300 * Math.PI / 180 ),
			innerRadius: 40,		//内圆半径
			outerRadius: 50,		//外圆半径
			innerStyle: '#D6D862',	//内圆的填充样式
			outerStyle: '#E1E1E1',	//外圆的填充样式
			text: 'JQuery'				//圆形内的文字
		});
		L3_CircleText_jquery.addToGroupOrLayer( L3_group );
		//把3环添加到 动画层上去
		animateLayer.add( L3_group );

		animateLayer.draw();


		var rotateAnglPerSecond = 40;//每秒钟设置旋转60
		//Konva的帧动画系统
		var animate = new Konva.Animation(function(frame){

			var rotateAngle =  rotateAnglPerSecond * frame.timeDiff / 1000;  //上一帧和当前帧的时间差，毫秒。

			L2Group.rotate( rotateAngle );// 不是弧度，是角度
			L2Group.getChildren().each(function(item,index){
		
				item.rotate(-rotateAngle);
			});

			L3_group.rotate( -rotateAngle );
	
			L3_group.getChildren().each(function(item ,index ){

				item.rotate( rotateAngle );//设置元素进行旋转 度数
			})
		}, animateLayer);
		animate.start();//启动动画


		animateLayer.on('mouseover', function(){
	
			rotateAnglPerSecond = 10; //设置旋转的角度为10度，旋转变慢。
		});

		animateLayer.on('mouseout', function(){

			rotateAnglPerSecond = 60; 
		});


})()