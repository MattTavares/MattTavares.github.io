var RANDOM_CSS = {
  cssfiles : ['bk1.css','bk2.css','bk3.css','bk4.css','bk5.css','bk6.css'],
  pathtocss : 'css/',
  getrandomcss : function() { return this.cssfiles[Math.floor(Math.random()*this.cssfiles.length)]; },
  getlinktag : function() { return '<link rel="stylesheet" type="text/css" href="'+this.pathtocss+this.getrandomcss()+'" />'; },
  printlinktag : function() { document.write(this.getlinktag()); }
};