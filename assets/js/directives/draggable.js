// Draggable
// ************************************************************************
angular.module('sidecar.controllers').directive('draggable', function () {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                var status = this.getAttribute("id")
                var title = $(this).text();
                var id = $(this).data("taskid")
                var completed
                console.log($(this).parent().attr("class"))
                if ($(this).parent().hasClass("done")){
                    completed = true;
                }
                else {
                    completed = false;
                }
            $.ajax({
              type: "POST",
              url: "/tasks/update/"+id,
              data: { title: title, completed: completed }
            })
              .done(function( msg ) {
               
              });
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
})