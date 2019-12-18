10.times do |i|  
  firstname = Faker::Name.first_name 
  lastname = Faker::Name.last_name
  email = "test#{i}@test.com"
  password = "password"
  password_confirmation = 'password'
  avatar = Faker::Avatar.image
  User.create(firstname: firstname, lastname: lastname, email: email, password: password, avatar: avatar)
  puts '10 users'
end

# puts "10 Users"