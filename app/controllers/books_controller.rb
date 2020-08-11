class BooksController < ApplicationController  
  before_action :set_book, only: [:show]

  def index
    @books = Book.all
    render json: @books, include: :reviews, status: :ok
  end

  # GET /books/1

  def show
    render json: @book, include: :reviews, status: :ok
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

end