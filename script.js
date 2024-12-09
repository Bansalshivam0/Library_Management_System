document.addEventListener('DOMContentLoaded', function () {
    const deleteLinks = document.querySelectorAll('a[href^="/delete_"]');
    deleteLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const confirmDelete = confirm("Are you sure you want to delete this?");
            if (!confirmDelete) {
                e.preventDefault();
            }
        });
    });
});
