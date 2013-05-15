var skipN = parseInt(prompt('How many skip top N?', '0'));
var cells = $("td:last:not(.total)", "#published table tr");
var nums = [];
cells.each(function () { nums.push(parseInt($(this).text())) });
nums.sort(function (a, b) { return a < b ? -1 : a > b ? 1 : 0 })
var max = nums.slice(-skipN - 1).reverse().pop();
cells.each(function () {
    var num = parseInt($(this).text()); if (num > max) return;
    var holder = $('<div/>').appendTo($(this).closest('tr').children('td:eq(1)')).css('background-color', '#eee');
    $('<div/>').appendTo(holder).css({ height: '8px', "background-color": 'darkorange', width: Math.min(num / max * 100, 100) + '%' })
});
