$(function(){
	$('#contents div[id !="tab1"]').hide();//隱藏tab1以外的內容
	$("a").click(function(){//點選頁面
		$("#contents div").hide();//先將所有內容設為隱藏不顯示
		$($(this).attr("href")).show();//顯示出選擇頁面的對應內容
		$(".current").removeClass("current");//移除目前的current類別
		$(this).addClass("current");//在目前所選頁面本身加上current類別

		return false;
	});
});