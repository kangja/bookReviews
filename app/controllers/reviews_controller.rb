class ReviewsController < ApplicationController
  before_action :set_book, only: [:index, :show, :create, :update, :destroy]
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

   # GET /books/id/reviews/
  def index
    @reviews = Review.where(book_id: @book.id)
    render json: @reviews, include: :book, status: :ok
  end

   # GET /books/id/reviews/1
   def show
    render json: @review, include: :book, status: :ok
  end

  # POST /books/id/reviews
  def create
    @review = Review.new(review_params)
    @review.book = @book
    @review.user = @current_user
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

    # PATCH/PUT /books/id/reviews/1
  def update
    # @review.content = @content
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

    # DELETE /books/id/reviews/1
  def destroy
    @review.destroy
  end

  private
  def set_book
    @book = Book.find(params[:book_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:content, :id, :book_id )
  end

end
