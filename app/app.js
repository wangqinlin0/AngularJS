//控制器和数据操作
var app=angular.module("myapp",['routeJs','ngRoute']);
app.controller("mainctrl",function($scope){
	//用户名
	$scope.userName = '汪秦林';
	//用户性别
	$scope.sex = '女';
	//用户年龄
	$scope.age = 21;
	//用户头像地址
	$scope.photosrc = 'images/b20.jpg';
	//粉丝数
	$scope.fans = 199;
	//点赞数
	$scope.like = 999;
	//左侧操作栏默认不显示
	$scope.operateShow = false;
	//左侧边栏默认显示
	$scope.leftShow = true;
	//默认没有点赞，点赞后按钮为不可操作状态
	$scope.isread1 = false;
	//默认没有关注，关注后按钮为不可操作状态
	$scope.isread2 = false;

	$scope.list = [{'name':'首页'},{'name':'简介'},{'name':'信息'}];

	$scope.fansArr=[
			{'fansImg':'images/b4.jpg','fansName':'小王','fansTag':'设计师，博客'},
			{'fansImg':'images/b5.jpg','fansName':'张琳','fansTag':'作家，杂志编辑'},
			{'fansImg':'images/b6.jpg','fansName':'李小明','fansTag':'艺术总监，电影剪辑'},
			{'fansImg':'images/b7.jpg','fansName':'赵大城','fansTag':'音乐家，运动员'},
	];
	
	//点赞方法
	$scope.upvote = function(){	
		$scope.like = $scope.like+1;
		if (!$scope.isread1) {	
			$scope.isread1 = true;
		}
		document.getElementById('likeId').innerHTML="已赞";
	}
	//加关注
	$scope.focusIt = function(){	
		$scope.fans = $scope.fans+1;
		if (!$scope.isread2) {	
			$scope.isread2 = true;
		}
		document.getElementById('focusId').innerHTML="已关注";
	}

	//评论方法
	$scope.comment = function(){	
		//获取当前用户名
		var username = $scope.userName;
		//获取当前头像地址
		var photo = $scope.photosrc;
		//获取输入内容
		var msg = document.getElementById('commentMsg').value;
		//设置为空
		document.getElementById('commentMsg').value = "";
		//发出的评论
		$scope.commentMsg = msg;
		//新建div，并设置为评论格式
		var newItem = document.createElement("div");
		//获取当前时间
		var myDate = new Date();
		var mytime = myDate.toLocaleTimeString();
		newItem.innerHTML = "<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+photo+"'></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>"+mytime+"</span><a href=''>"+username+"：</a>"+msg+"</div></div></div>";
		//将新建的评论添加到评论区
		document.getElementById("commentArea").insertBefore(newItem,document.getElementById('comment'));

	}
	$scope.submit = function(){	
		//用户名修改
		var username = document.getElementById("inputUsername").value;
		$scope.userName = username;
	
		//年龄修改
		var age=document.getElementById("inputage").value;
		$scope.age = age;
		//头像修改
		var photosrc=document.getElementById("inputSrc").value;
		if(photosrc=="")
		{
			$scope.photosrc="images/b20.jpg";
		}
		else
		{
			$scope.photosrc="images/"+photosrc.substr(12);
		}
	}

	$scope.displayOperate = function(){	
		$scope.operateShow=!$scope.operateShow;
	}

	$scope.displayLeft = function(){	
		$scope.leftShow = !$scope.leftShow;

	}
});
