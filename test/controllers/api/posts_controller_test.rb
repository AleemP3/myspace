require 'test_helper'

class Api::PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_posts_index_url
    assert_response :success
  end

  test "should get new" do
    get api_posts_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_posts_edit_url
    assert_response :success
  end

end
