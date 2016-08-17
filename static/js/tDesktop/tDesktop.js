define('tDesktop',function(require, exports, module){
    
    //require
    var $ = window.jQuery;
    var JSON = window.JSON;
    
    //require Plugin
    var TabObj = require('tDesktop/tDesktop.Tabs');
    var tab = TabObj.Tabs;
    var LayoutObj = require('tDesktop/tDesktop.Layout');
    var MenuObj = require('tDesktop/tDesktop.Menu');
    var ThemeObj = require('tDesktop/tDesktop.Theme');
    var theme = ThemeObj.Theme;
    var TodayObj = require('tDesktop/tDesktop.Today');
    var IMObj = require('tDesktop/tDesktop.IM');
    var NocboxObj = require('tDesktop/tDesktop.Nocbox');
    var nocbox = NocboxObj.Nocbox;
    var Search = require('tDesktop/tDesktop.Search');
    var Notification = require('tDesktop/tDesktop.Notification');

    //define search init variaty 
    var hasSearchModuleBeenInit;
    
    window.createTab = function(id, name, code, open_window){
        tab.createTab(id, name, code, open_window);
        $('body').removeClass('showSearch').removeClass('right-mini');
		$('#eastbar,#searchbar').removeClass('on');
		if(tDesktop.isTouchDevice()){
			$('#east').addClass('mobile-east').hide();
			$('#first_menu li div').removeClass('first-menu-item-hover');
			$('#menu_panel,#mask').hide();
		}
    };
    window.selectTab = function(id){
        tab.selectTab(id);
    };
    window.closeTab = function(id){
        id = (typeof(id) != 'string') ? tab.getSelected() : id;
            tab.closeTab(id);
    };
    window.IframeLoaded = function(id){
        tab.IframeLoaded(id);
    };
    
    //click org avatar open the chat dialog by tl
    window.send_msg = function(uid, title){
        IMObj.IM.Org.nodeclick(uid, title);
    }
    
    var nextTabId = 10000;
    window.openURL = function(id, name, url, open_window, width, height, left, top){
       id = !id ? ('w' + (nextTabId++)) : id;
       if(open_window != "1")
       {
          window.setTimeout(function(){jQuery().addTab(id, name, url, true)}, 1);
       }
       else
       {
          width = typeof(width) == "undefined" ? 780 : width;
          height = typeof(height) == "undefined" ? 550 : height;
          left = typeof(left) == "undefined" ? (screen.availWidth-width)/2 : left;
          top = typeof(top) == "undefined" ? (screen.availHeight-height)/2-30 : top;
          window.open(url, id, "height="+height+",width="+width+",status=0,toolbar=no,menubar=yes,location=no,scrollbars=yes,top="+top+",left="+left+",resizable=yes");
       }
       jQuery(document).trigger('click');
    }
    $.fn.addTab = function(id, title, url, closable, selected){
        tab.addTab(id, title, url, closable, selected);
        $('body').removeClass('showSearch').removeClass('right-mini');
        $('#eastbar,#searchbar').removeClass('on');
		if(tDesktop.isTouchDevice()){
			$('#east').addClass('mobile-east').hide();
		}
    };
    $.fn.selectTab = function(id){
        tab.selectTab(id);
    };
    $.fn.closeTab = function(id){
        id = (typeof(id) != 'string') ? tab.getSelected() : id;
        tab.closeTab(id);
    };
    $.fn.getSelected = function(){
        return $('#tabs_container').tabs('selected');
    };

    var TDesktop = Backbone.View.extend({
        el: $('body'),
        events: {
            'click a#person_info': 'initPersonInfo',
            'click a#logout': 'initLogout',
            'click a#searchbar': 'initSearch',
            'click a#totaskbar': 'initTaskCenter',
            'click a#tosns': 'initSns',
            'click a#eastbar': 'initEast',
			'click ul#first_menu':'touchDevicePanel'
        },
        initialize: function(){
            if(TDesktop._instance){
                return TDesktop._instance;
            }
            _.bindAll(this, 'initPersonInfo', 'initLogout', 'initSearch','initEast', 'initTaskCenter','initSns'); 
            var self = this;
			
            //for iPad touch
            if(self.isTouchDevice())
            {	
				$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">');	
			    $('head').append('<script type="text/javascript" src="/static/js/iscroll.js"></script>');
                // var Iscroll = require('/static/js/iscroll.js');
                $('#east').hide();
                $('body').addClass('mobile-body');
                $('#center').addClass('mobile-center');
				$('#west').prepend('<div id="menu_panel"></div>');
				$(window).resize(function(){self.initFirstMenuIscroll();});
				$("body").delegate('.first-menu li','touchend',function() {
					$('#first_menu li div').removeClass('first-menu-item-hover');
					$(this).children('div').addClass('first-menu-item-hover');
					var id = $(this).attr('data-submenu-id');
					if($('#first_menu li div').hasClass('first-menu-item-hover')){
						$('#menu_panel').show();
						var menu_panel = $('#'+ id).html();
						$('#menu_panel').empty();
						$('#menu_panel').html("<div>" + menu_panel + "</div>");
						self.refreshSecondMenuIscroll();
						$('#mask').show();
					}else{
						$('#menu_panel,#mask').hide();
					}
				});
				
				$('body').delegate('#mask','touchend',function(){
					$('#first_menu li div').removeClass('first-menu-item-hover');
					$('#menu_panel,#mask').hide();
				});

                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            }
            self.EventManager = {};
            _.extend(self.EventManager, Backbone.Events);
            self.initLayout();
            self.initMenu();
            self.initTabs();
            self.initPortal();
            self.initTheme();
            self.initTip();
            self.initToday();
            self.initOnline();
            self.initNotify();
            self.initNocbox();
            self.initIM();
            self.initNotification();
			
            
            TDesktop._instance = this;
        },
		initFirstMenuIscroll:function(){
			var myScroll;
			var iscrollh = $('#west').height() -40;
			$('#west-body-wrapper').css({"height":iscrollh,"overflow":"hidden"});
			myScroll = new IScroll('#west-body-wrapper', {
				scrollbars: false,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				preventDefault: false,
				fadeScrollbars: true
			});
		},
		refreshSecondMenuIscroll:function(){
			var myScroll;
			myScroll = new IScroll('#menu_panel', {
				scrollbars: true,
				mouseWheel: false,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				preventDefault: false,
				fadeScrollbars: true
			});
		},
        initTip: function(){
			var self = this;
			if(self.isTouchDevice()){
				return;
			}else{
				if(jQuery && jQuery.fn.tooltip){
					jQuery('[data-toggle="tooltip"]').tooltip({
						container: 'body'
					});
				}
			}
            
        },
        isTouchDevice: function(){
            try{
                document.createEvent("TouchEvent");
                return userAgent.indexOf("mobile") >= 0 || userAgent.indexOf("maxthon") < 0;
            }catch(e){
                return false;
            }
        },
        initLayout: function(){
            var layout = new LayoutObj.Layout({ tDesktop: this });

        },
        initMenu: function(){
			var self = this;
			if (self.isTouchDevice()){
				$('.menu-scroll').remove();
				// $('.west-footer,.noc-nav-bar').css("bottom","15px");
				var menu = new MenuObj.Menu.MenuInit({ tDesktop: this });
				self.initFirstMenuIscroll();
				this.menu = menu;
				this.EventManager.on('createTab', function(){
					menu.hideActiveMenu();
				});
				$("#first_menu").resize();
			}else{
				var menu = new MenuObj.Menu.MenuInit({ tDesktop: this });
				var menuscroll = new MenuObj.Menu.MenuScroll({ tDesktop: this });
				menu.menuHover();
				this.menu = menu;
				this.EventManager.on('createTab', function(){
					menu.hideActiveMenu();
				});
				$("#first_menu").resize();
			}
            
        },
        initTabs: function(){
            var self = this;
            tab.init();
            tab._createTab = tab.createTab;
            tab.createTab = function(){
                tab._createTab.apply(tab, arguments);
                self.EventManager.trigger('createTab');
            }
        },
        initPortal: function(){
            for(var i=0; i < portalLoadArray.length; i++)
            {
                tab.addTab('portal_'+portalLoadArray[i].id, portalLoadArray[i].title, portalLoadArray[i].url, portalLoadArray[i].closable, (i==0));
            }
        },
        initTheme: function(){
            theme.init();
        },
        initSearch: function(){
            //---------- lijun ----------
            if(!hasSearchModuleBeenInit) {
                hasSearchModuleBeenInit = Search.init();
            }
            $("#eastbar").removeClass('on');
			var self = this
			if(self.isTouchDevice()){
				$('#east').addClass('mobile-east').hide();
			}
            $("#searchbar").toggleClass('on');
            $('body').removeClass('right-mini').toggleClass('showSearch');
        },
        initToday: function(){
            var deskdate = new TodayObj.Today.Deskdate({ tDesktop: this });
            var weather = new TodayObj.Today.Weather({ tDesktop: this });
            var calendar = new TodayObj.Today.Calendar({ tDesktop: this });
            var reminder = new TodayObj.Today.Reminder({ tDesktop: this });
        },
        initOnline: function(){
            $('#online_flag').click(function(){
                if($('#on_status:visible').length>0){
                    $('#on_status').hide();
                }
                else{
                    $('#on_status').show();
                }
            });
            $('#on_status > a').click(function(){
                var status = $(this).attr('status');
                if(status < "1" || status > "4") return;
                $.get("ipanel/ispirit_api.php", {API:"on_status",CONTENT: status});
                var target = $(this).find('i').text();
                var targetClass = $(this).find('i').attr('class');
                $('#online_flag').text(target).attr('class', targetClass);
                $('#on_status').fadeOut(300);
            });
        },
        initPersonInfo: function(){
            window.createTab('11', func_array["f11"][0], func_array["f11"][1], func_array["f11"][4]);
        },
        initLogout: function(){
            var relogin = 0;
            var msg = sprintf(td_lang.inc.msg_109, loginUser.user_name) + "\n" + sprintf(td_lang.inc.msg_110, logoutText + "\n\n");
            if(window.confirm(msg))
            {
                relogin=1;
                window.location="/general/relogin.php";
            }
        },
        initTaskCenter: function(){
            $('body').addClass('left-mini');
            window.createTab('taskcenter', td_lang.general.project.msg_3, 'task_center', false);
        },
        initSns: function(){
            window.createTab(73,func_array["f73"][0],'sns','');
        },
        initEast: function(){
			var self = this;
			$("#searchbar").removeClass('on');
			$("#eastbar").toggleClass('on');
			$('body').removeClass('showSearch');
			if (self.isTouchDevice()){
				$('#east').css('right','0');
				if($("#eastbar").hasClass('on')){
					$('#east').addClass('mobile-east').show();
					// $('body').addClass('right-mini');
				}else{
					$('#east').addClass('mobile-east').hide();
					// $('body').removeClass('right-mini');
				}
			}else{
				$('body').toggleClass('right-mini');
			}
		
        },
        initNocbox: function(){
            nocbox.init({ tDesktop: this });
        },
        formatTime: function(c){
            var c = parseInt(c) * 1000;
            var a = new Date();
            var g = new Date(c);
            var b = new Date(a);
            var f = a - c;
            var e = "";

            function d(h){
                return h < 10 ? ("0" + h) : h
            }
            if(f < 0){
                e = ""           
            }else{
                if(f < (60 * 1000)){
                    e = parseInt(f / 1000) + td_lang.inc.msg_169
                }else{
                    if(f < (60 * 60 * 1000)){
                        e = parseInt(f / 60 / 1000) + td_lang.inc.msg_170
                    }else{
                        if(f < (24 * 60 * 60 * 1000)){
                            if(g.getDate() == b.getDate()){
                                e = td_lang.inc.msg_182 + d(g.getHours()) + ":" + d(g.getMinutes())
                            }else{
                                e = (g.getMonth() + 1) + td_lang.inc.msg_171 + g.getDate() + td_lang.inc.msg_172 + d(g.getHours()) + ":" + d(g.getMinutes())
                            }
                        }else{
                            if(f < (365 * 24 * 60 * 60 * 1000)){
                                if(g.getFullYear() == b.getFullYear()){
                                    e = (g.getMonth() + 1) + td_lang.inc.msg_171  + g.getDate() + td_lang.inc.msg_172 + d(g.getHours()) + ":" + d(g.getMinutes())
                                }else{
                                    e = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate() + " " + d(g.getHours()) + ":" + d(g.getMinutes())
                                }
                            }else{
                                e = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate() + " " + d(g.getHours()) + ":" + d(g.getMinutes())
                            }
                        }
                    }
                }
            }
            return e;
        },
        initIM: function(){
            var im = IMObj.IM;
            im.init({ tDesktop: this });
        },
        initNotify: function(){
            if($('#notify_panel').length > 0)
            {
                $('#overlay').show();
                $('#notify_panel').show();
                $('#notify_panel .btn-ok').click(function(){
                    var cookie_name = $(this).attr("cookie_name");
                    var cookie_value = $(this).attr("cookie_value");
                    document.cookie = cookie_name + "=" + cookie_value; path="/"; expires=1000;
                    $('#notify_panel .btn-close').click();
                });
                $('#notify_panel .btn-close').click(function(){
                    $('#overlay').hide();
                    $('#notify_panel').hide();
                });
                $('#notify_panel .head-close').click(function(){
                    $('#notify_panel .btn-close').click();
                });
            }
            
        },
        initNotification: function() {
            Notification.init(this);
        }
    });
    
    TDesktop.getInstance = function(){
        return TDesktop._instance;  
    };
    exports.TDesktop = TDesktop;
    window.TDesktop = TDesktop;
});