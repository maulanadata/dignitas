//=== git stash
/*
## membuat stash
git stash save "name stash"

## menampilkan semua stash
git stash list

## mengambil stash untuk diterapkan ke code
git stash apply [name_stash]
git stash pop [name_stash]

## menghapus stash
git stash drop [name_stash]
git stash clear
*/

//=== git tag
/*
## membuat tag
git tag -a <name_tag> -m "message tag"
git tag <name_tag>

## menampilkan tag
git tag
git show
git show <name_tag>

## mengupload tag yang sudah dibuat
git push origin <name_tag>

## menggunakan tag
git checkout <name_tag>
git checkout -b <name_branch> <name_tag>

## menandai commit tertentu
git tag <name_tag> <commit_id>

## menghapus tag
git tag -d <name_tag>
*/

//=== git cherry-pick
/*
## mengambil code berdasarkan id commit
git cherry-pick <commit_id>

## melanjutkan cherry-pick jika akan mengambil banyak commit
git cherry-pick --continue

## membatalkan cherry-pick jika ada masalah
git cherry-pick --abort

## membuat commit & push code
git commit -m "commit message"
git push origin <name_branch>
*/
