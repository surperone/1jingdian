setTimeout(showFlash,200);setTimeout(hideFlash,2000);$(document).on('mouseenter','.user-avatar.user-avatar-popover',function(){var _this=$(this);$(this).popover({content:function(){return $(this).parent().nextAll('.popover-content-wap').first().html()},html:true,container:'body',trigger:'manual',placement:'bottom',animation:false,viewport:{selector:'body',padding:15},selector:'.user-avatar.user-avatar-popover'}).popover('show');$(".popover").one("mouseleave",function(){$(_this).popover('destroy');});});$(document).on('mouseleave','.user-avatar.user-avatar-popover',function(){var _this=$(this);setTimeout(function(){if(!$(".popover:hover").length){$(_this).popover("destroy");}},200);});$(document).on('click','.vote',function(){var pieceId=parseInt($(this).attr('data-piece-id')),url="",votesCount=$(this).find('.votes-count').first(),vote=$(this),voted=$(this).hasClass('voted');if(voted){url=urlFor('piece.unvote',{uid:pieceId});}else{url=urlFor('piece.vote',{uid:pieceId});}$.ajax({url:url,method:'post',dataType:'json',success:function(response){var currentVotesCount=parseInt(votesCount.text()),targetVotesCount;if(response.result){if(voted){targetVotesCount=(currentVotesCount>0)?currentVotesCount-1:0;$(".vote[data-piece-id="+pieceId+"]").removeClass('voted').find('.votes-count').text(targetVotesCount);}else{targetVotesCount=currentVotesCount+1;$(".vote[data-piece-id="+pieceId+"]").addClass('voted').find('.votes-count').text(targetVotesCount);}}}});});$(document).on('click','.need-signed-in',function(){if(!$(document.body).hasClass('signed-in')){window.location=urlFor('account.signin');}});$('[data-toggle="tooltip"]').tooltip();if(navigator.platform.indexOf('Win')>-1){$('body').addClass('windows');}function showFlash(){$('.flash-message').slideDown('fast');}function hideFlash(){$('.flash-message').slideUp('fast');}if(document.documentElement.id==='page-collection-edit'){(function(){var uploader=new plupload.Uploader({browse_button:'btn-upload-cover',url:urlFor('collection.upload_cover',{uid:$('#btn-upload-cover').data('collection-id')}),multipart_params:{'csrf_token':g.csrfToken}});uploader.init();uploader.bind('FilesAdded',function(up,files){plupload.each(files,function(file){uploader.start();});});uploader.bind('FileUploaded',function(up,file,info){var response=$.parseJSON(info.response);if(response.result){$('.upload-error-info').fadeOut();$('.cover').hide().attr('src',response.avatar_url).fadeIn('fast');}else{$('.upload-error-info').fadeIn();}});})();}if(document.documentElement.id==='page-piece-add'){(function(){if(g.method==='GET'){$('#content').focus();}})();}if(document.documentElement.id==='page-site-about'){(function(){})();}if(document.documentElement.id==='page-site-index'){(function(){})();}if(document.documentElement.id==='page-user-settings'){(function(){var uploader=new plupload.Uploader({browse_button:'btn-upload-avatar',url:urlFor('user.upload_avatar'),multipart_params:{'csrf_token':g.csrfToken}});uploader.init();uploader.bind('FilesAdded',function(up,files){plupload.each(files,function(file){uploader.start();});});uploader.bind('FileUploaded',function(up,file,info){var response=$.parseJSON(info.response);if(response.result){$('.upload-error-info').fadeOut();$('.user-avatar').hide().attr('src',response.avatar_url).fadeIn('fast');}else{$('.upload-error-info').fadeIn();}});})();}