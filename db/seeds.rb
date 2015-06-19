
20.times do

user = User.create(name: Faker::Internet.user_name,
                  email: Faker::Internet.safe_email,
        password_digest: Faker::Internet.password
                  )

project = Project.create(title: Faker::Name.title,
                          body: Faker::Lorem.paragraph,
                      location: Faker::Address.city,
                    image_link: Faker::Internet.url('example.com'),
                    project_url: Faker::Internet.url('example.com', '/foobar.html'),
                          year: Faker::Number.number(4),
                          likes: Faker::Number.number(2),
                        )

comment = Comment.create(body: Faker::Lorem.sentence,
                      user_id: user.id,
                        )

end
