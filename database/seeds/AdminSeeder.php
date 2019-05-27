<?php

use Illuminate\Database\Seeder;
use App\users;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new users();

        $admin->name='evenajah';
        $admin->password=bcrypt('keyboard159');
        $admin->email='evelastest@gmail.com';
        $admin->stat='admin';

        $admin->save();
    }
}
